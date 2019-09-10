const electron = require('electron');
const url = require('url');
const path = require('path');

const {app,BrowserWindow,Menu} = electron;

let mainWindow;
let addWindow;

//Listen for app to be ready
app.on('ready', function(){
    //create new window
    mainWindow = new BrowserWindow({});
    // Load html into window
    mainWindow.loadURL(url.format({
        pathname: path.join(__dirname,'mainWindow.html'),
        protocol: 'file',
        slashes: true
    }))
// Build menu from template
const mainMenu = Menu.buildFromTemplate(mainMenuTemplate);
//Insert menu
Menu.setApplicationMenu(mainMenu)
})
// Handle add window
function createAddWindow(){
     //create new window
     addWindow = new BrowserWindow({
         width: 200,
         height: 300,
         title: 'Add ShoppingList Item'
     });
     // Load html into window
     addWindow.loadURL(url.format({
         pathname: path.join(__dirname,'addWindow.html'),
         protocol: 'file',
         slashes: true  
}))
}
// Create menu template
const mainMenuTemplate = [{
    label: 'File',
    submenu:[{
        label: 'Add Item' ,
        click(){
            createAddWindow();
        }
    },
    {
        label: 'Clear Item'
    },
    {
        label: 'Quit',
        accelerator: process.platform == 'darwin' ? 'Command+Q' : 'Ctrl+Q',
        click(){
            app.quit(); 
        }
    }
    ]
}]