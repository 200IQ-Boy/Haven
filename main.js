// main.js
import { app, BrowserWindow, ipcMain } from 'electron';
import path from 'path';
import { fileURLToPath } from 'url';
import { spawn } from 'child_process';
import fs from 'fs';


const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
let mainWindow;
let proxyProcess = null;

const createWindow = () => {
  const preloadPath = path.join(__dirname, 'preload.js');
  console.log('✅ preload path:', preloadPath);
  console.log('✅ preload exists:', fs.existsSync(preloadPath));
  mainWindow = new BrowserWindow({
    width: 1000,
    height: 800,
    webPreferences: {
      preload: preloadPath,
      nodeIntegration: false,
      contextIsolation: false,
    },
  });
  // DEV
  mainWindow.loadURL('http://localhost:3000');
  mainWindow.webContents.openDevTools();
  // PROD
  // mainWindow.loadFile(path.join(__dirname, '../dist/index.html'));
};

app.whenReady().then(createWindow);

ipcMain.on('enable-proxy', () => {
  if (!proxyProcess) {
    proxyProcess = spawn('node', [path.join(__dirname, 'proxy/proxy.js')], {
      stdio: 'inherit',
    });
    console.log("Proxy lancé");
  }
});

ipcMain.on('disable-proxy', () => {
  if (proxyProcess) {
    proxyProcess.kill();
    proxyProcess = null;
    console.log("Proxy arrêté");
  }
});


