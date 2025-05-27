// main.js
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import { spawn } from 'child_process';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let win;

function createWindow() {
  win = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, "preload.js"), // pour communication
      contextIsolation: true,
      nodeIntegration: false,
    },
  });

  win.loadURL("http://localhost:3000"); // Application React
  win.webContents.on("did-finish-load", () => {
  console.log("✅ Page UI chargée par Electron");
  });
}

// Lancer le proxy Node au démarrage
function startProxy() {
  spawn("node", [path.join(__dirname, "./proxy/")], {
    detached: true,
    stdio: "ignore",
  }).unref();
}

app.whenReady().then(() => {
  createWindow();
  /*startProxy();*/

  app.on("activate", () => {
    if (BrowserWindow.getAllWindows().length === 0) createWindow();
  });
});

app.on("window-all-closed", () => {
  if (process.platform !== "darwin") app.quit();
});

ipcMain.on('enable-proxy', () => {
  startProxy(); // Start the proxy server
  console.log("Proxy enabled");
});

ipcMain.on('disable-proxy', () => {
  console.log("Proxy disabled");
});
