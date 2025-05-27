// preload.js
import { contextBridge, ipcRenderer } from 'electron';
console.log("Preload script loaded");

// Expose a safe API to the renderer process 
contextBridge.exposeInMainWorld('electronAPI', {
  enableProxy: () => ipcRenderer.send('enable-proxy'),
  disableProxy: () => ipcRenderer.send('disable-proxy')
});
