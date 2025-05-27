// main.js
import { app, BrowserWindow } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // pour communication
    },
  });

  win.loadURL("http://localhost:3000"); // Application React
}

// Lancer le proxy Node au démarrage
function startProxy() {
  spawn("node", [path.join(__dirname, "proxy/proxy.js")], {
    detached: true,
    stdio: "ignore",
  }).unref();
}

app.whenReady().then(() => {
  createWindow();
  startProxy();

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

