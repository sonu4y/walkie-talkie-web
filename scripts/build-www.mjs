// Copies the web app into www/ so Capacitor can bundle it into the APK.
import { mkdirSync, copyFileSync, rmSync } from 'node:fs';
rmSync('www', { recursive: true, force: true });
mkdirSync('www', { recursive: true });
for (const f of ['index.html', 'config.js']) copyFileSync(f, `www/${f}`);
console.log('www/ ready');
