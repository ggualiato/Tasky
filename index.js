const path = require('path')
const electron = require('electron')
const TimerTray = require('./app/TimerTray')
const MainWindow = require('./app/MainWindow')

const { app } = electron

let mainWindow
let tray

app.on('ready', () => {
    process.platform !== 'win32' && app.dock.hide()

    mainWindow = new MainWindow(`file://${__dirname}/src/index.html`)

    const iconName = process.platform === 'win32' ? 'windows-icon.png' : 'iconTemplate.png'
    const iconPath = path.join(__dirname, `./src/assets/${iconName}`)

    tray = new TimerTray(iconPath, mainWindow)
})