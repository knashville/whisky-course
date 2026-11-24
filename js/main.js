import course from './content/course.js';
import { startApp } from './app.js';

const root = document.getElementById('app');
const boot = () => startApp(course, root);
// Inside a claude.ai viewer, `hot` lets a republished version replace this one in place.
const hot = window.claude?.hot;
if (hot?.ready) hot.ready(boot);
else boot();
