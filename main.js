const { app, BrowserWindow } = require('electron');
const { autoUpdater } = require('electron-updater');

app.on('ready', () => {
  const win = new BrowserWindow({
    width: 250,
     height: 250,
     frame: false,
    });

  autoUpdater.checkForUpdatesAndNotify();
  autoUpdater.on('update-available', () => {
win.loadFile('update.html');
  });
});