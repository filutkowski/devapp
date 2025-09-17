const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 100,
     height: 100,
     frame: false,
    });

  autoUpdater.checkForUpdatesAndNotify();
});