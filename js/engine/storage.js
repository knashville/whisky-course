// Progress storage for the browser.
//
// Layer 1 (always): this browser's localStorage, wrapped in try/catch because
//   private windows, previews and blocked site data can throw or return nothing.
// Layer 2 (when the page runs as a claude.ai Artifact with the `db` and `user`
//   capabilities): a private per-learner document at data/users/<id>/progress,
//   so progress follows a signed-in learner across devices. The two copies are
//   merged with mergeProgress, which never loses a pass or a best score.

import { normalizeProgress, mergeProgress } from './progress.js';

const KEY = 'whiskey-course:progress:v1';
const SAVE_DELAY_MS = 1200;

function readLocal() {
  try {
    const raw = globalThis.localStorage?.getItem(KEY);
    return raw ? normalizeProgress(JSON.parse(raw)) : null;
  } catch {
    return null;
  }
}

function writeLocal(p) {
  try {
    globalThis.localStorage?.setItem(KEY, JSON.stringify(p));
    return true;
  } catch {
    return false;
  }
}

export function createStore() {
  let state = readLocal() || normalizeProgress(null);
  const listeners = new Set();
  let status = { mode: 'local', detail: 'Saved in this browser' };
  let remote = null; // { ref }
  let saveTimer = null;
  let saving = Promise.resolve();
  let dirtyRemote = false;

  const emit = () => listeners.forEach((fn) => fn(state, status));
  const setStatus = (mode, detail) => {
    status = { mode, detail };
    emit();
  };

  function scheduleRemote() {
    if (!remote) return;
    dirtyRemote = true;
    clearTimeout(saveTimer);
    saveTimer = setTimeout(flushRemote, SAVE_DELAY_MS);
  }

  function flushRemote() {
    if (!remote || !dirtyRemote) return saving;
    dirtyRemote = false;
    const snapshot = JSON.parse(JSON.stringify(state));
    // One write at a time to the same document.
    saving = saving
      .then(() => remote.ref.set(snapshot))
      .then(() => setStatus('synced', 'Synced to your account'))
      .catch((e) => {
        if (e && e.code === 'invalid_argument') {
          remote = null;
          setStatus('local', 'Saved in this browser (this viewer cannot save to the account)');
        } else {
          setStatus('local', 'Saved in this browser; account sync will retry on your next change');
          dirtyRemote = true;
        }
      });
    return saving;
  }

  async function connectCloud() {
    const claude = globalThis.claude;
    if (!claude || typeof claude.use !== 'function') return false;
    try {
      const [db, user] = await Promise.all([claude.use('db'), claude.use('user')]);
      if (!db || !user) return false;
      const id = await user.id();
      if (!id) return false;
      const ref = db.doc(`data/users/${id}/progress`);
      setStatus('connecting', 'Connecting to your account…');
      const timeout = new Promise((_, rej) => setTimeout(() => rej({ code: 'timeout' }), 10000));
      const snap = await Promise.race([ref.get(), timeout]);
      remote = { ref };
      const remoteData = snap.exists ? snap.data() : null;
      const merged = remoteData ? mergeProgress(state, remoteData) : state;
      state = merged;
      writeLocal(state);
      if (!remoteData || JSON.stringify(normalizeProgress(remoteData)) !== JSON.stringify(merged)) {
        dirtyRemote = true;
        await flushRemote();
      } else {
        setStatus('synced', 'Synced to your account');
      }
      emit();
      return true;
    } catch {
      remote = null;
      setStatus('local', 'Saved in this browser');
      return false;
    }
  }

  return {
    get: () => state,
    status: () => status,
    set(next) {
      state = normalizeProgress(next);
      const ok = writeLocal(state);
      if (!ok && !remote) status = { mode: 'memory', detail: 'Browser storage is unavailable; progress lasts until you close this page' };
      scheduleRemote();
      emit();
    },
    replace(next) {
      this.set(next);
    },
    subscribe(fn) {
      listeners.add(fn);
      return () => listeners.delete(fn);
    },
    connectCloud,
    flush: flushRemote,
  };
}
