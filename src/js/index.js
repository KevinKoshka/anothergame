import * as PIXI from 'pixi.js';

let type = "WebGL"
if(!PIXI.utils.isWebGLSupported()){
    type = "canvas"
}

PIXI.utils.sayHello(type);

// PIXI.application genera un elemento <canvas> y se encarga de mostrar los graficos dentro de el.
// Despues hay que crear un objeto dle tipo "Container" llamado "stage".
let app = new PIXI.Application({ 
    width: 256,         // default: 800
    height: 256,        // default: 600
    antialias: true,    // default: false
    transparent: false, // default: false
    resolution: 1       // default: 1
  });

//Add the canvas that Pixi automatically created for you to the HTML document
document.body.appendChild(app.view);