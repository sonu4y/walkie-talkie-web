// Adds the permissions a voice-call app needs to the generated Android manifest.
import { readFileSync, writeFileSync } from 'node:fs';
const p = 'android/app/src/main/AndroidManifest.xml';
let x = readFileSync(p, 'utf8');
const perms = [
  'android.permission.RECORD_AUDIO',
  'android.permission.MODIFY_AUDIO_SETTINGS',
  'android.permission.WAKE_LOCK',
];
const add = perms.filter(n => !x.includes(n)).map(n => `    <uses-permission android:name="${n}" />\n`).join('');
x = x.replace('    <uses-permission android:name="android.permission.INTERNET" />', add + '    <uses-permission android:name="android.permission.INTERNET" />');
writeFileSync(p, x);
console.log('manifest patched');
