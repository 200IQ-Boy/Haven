const { ipcRenderer } = require('electron');

window.electronAPI = {
  enableProxy: () => ipcRenderer.send('enable-proxy'),
  disableProxy: () => ipcRenderer.send('disable-proxy'),
};
