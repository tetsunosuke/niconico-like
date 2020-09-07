const electron = require('electron');
const app = electron.app;
const BrowserWindow = electron.BrowserWindow;

const main = async () => {
    const windowOptions = {
        width: 800,
        height: 600,
        transparent: true,
        //frame: true,
        //toolbar: true,
        webPreferences: {
            nodeIntegration: true
        }
    };
    const window = new BrowserWindow(windowOptions);
    // window.webContents.openDevTools()
    await window.loadURL("file://" + __dirname + "/app.html");
};

app.on('window-all-closed', function() {
    console.log("window-all-closed", process.platform);
    // この条件分岐なんでいるんだ？
    if (process.platform !== 'darwin') {
        app.quit();
    }

    // よくわからんので入れとく
    app.quit();
});

app.on('ready', function() {
    console.log("ready");
    main();
});
