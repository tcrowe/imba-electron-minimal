process.env.ELECTRON_DISABLE_SECURITY_WARNINGS = 0;

const { app, BrowserWindow } = require("electron");
const isNil = require("lodash/isNil");
let mainWindow;

function createWindow() {
  if (isNil(mainWindow) === false) {
    return;
  }

  mainWindow = new BrowserWindow({
    width: 1100,
    height: 600,
    center: true,
    title: "Youreadfor.me",
    webPreferences: {
      nodeIntegration: true,
      webSecurity: false
    }
  });

  mainWindow.loadURL(`file://${__dirname}/index.html`);
  mainWindow.on("closed", () => (mainWindow = null));
}

app.on("ready", createWindow);

app.on("window-all-closed", function() {
  try {
    app.quit();
  } catch (err) {
    console.error("error quitting app", err);
  }
});

app.on("activate", function() {
  if (mainWindow === null) {
    createWindow();
  }
});
