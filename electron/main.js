// Desktop wrapper: serves the bundled web app from a tiny local server (so it runs in a secure
// "localhost" context like a normal website) and shows it in a window with microphone access.
const { app, BrowserWindow, session, Menu } = require('electron');
const http = require('http');
const fs = require('fs');
const path = require('path');

const root = path.join(__dirname, 'www');
const types = {
  '.html': 'text/html; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8',
  '.json': 'application/json',
  '.png': 'image/png',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
};

function startServer() {
  return new Promise(resolve => {
    const srv = http.createServer((req, res) => {
      let p = decodeURIComponent((req.url || '/').split('?')[0]);
      if (p === '/') p = '/index.html';
      const file = path.normalize(path.join(root, p));
      if (!file.startsWith(root)) { res.writeHead(403); return res.end(); }
      fs.readFile(file, (err, data) => {
        if (err) { res.writeHead(404); return res.end('Not found'); }
        res.writeHead(200, { 'Content-Type': types[path.extname(file)] || 'application/octet-stream' });
        res.end(data);
      });
    });
    srv.once('listening', () => resolve(srv.address().port));
    srv.on('error', () => srv.listen(0, 'localhost'));   // fixed port busy: pick any free one
    srv.listen(47831, 'localhost');                       // fixed port keeps saved name/room between runs
  });
}

if (!app.requestSingleInstanceLock()) app.quit();

app.whenReady().then(async () => {
  const allow = ['media', 'audioCapture'];
  session.defaultSession.setPermissionRequestHandler((wc, permission, cb) => cb(allow.includes(permission)));
  session.defaultSession.setPermissionCheckHandler((wc, permission) => allow.includes(permission));

  const port = await startServer();
  Menu.setApplicationMenu(null);
  const win = new BrowserWindow({
    width: 480,
    height: 780,
    minWidth: 360,
    minHeight: 560,
    title: 'Voice Room',
    backgroundColor: '#0f1412',
    autoHideMenuBar: true,
    webPreferences: { backgroundThrottling: false },   // keep audio flowing when minimized
  });
  win.loadURL(`http://localhost:${port}/`);
  app.on('second-instance', () => { if (win.isMinimized()) win.restore(); win.focus(); });
});

app.on('window-all-closed', () => app.quit());
