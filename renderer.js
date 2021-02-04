const {ipcRenderer} = require('electron');

const sendMessageToMain = (message) =>{
    console.log('clickado');
    ipcRenderer.send('message:hola', 'hola desde renderer');
}

ipcRenderer.on('mensaje:back', (event, message) =>{
    console.log('mensaje recibido de renderer ', message);
})