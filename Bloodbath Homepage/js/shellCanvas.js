const cl = console.log;

window.onload = function () {           // onload wrapper
                                        // Global 2D context reference
var canvas;                             // Global canvas object reference
var context; 

let width = innerWidth
let height = innerHeight
let iteration = 1

// // Begin dynamic fulls screen canvas code

sizeCanvas()                            // create initial canvas
addEventListener("resize", sizeCanvas); // resize canvas and redraw on window size change

function createCanvas () {   
    const canvas = document.createElement("canvas"); 
    canvas.style.position = "absolute"; 
    canvas.style.left     = "0px";      
    canvas.style.top      = "0px";

    document.body.appendChild(canvas);  // Add to document
    return canvas;
}

function sizeCanvas () {                // Create or resize 
    if (canvas === undefined) {         
        canvas = createCanvas();        
        context = canvas.getContext("2d");  
    }
    canvas.width  = innerWidth; 
    canvas.height = innerHeight; 
    drawScreen()     
}

function drawScreen() {  // wrapper that gets called on resize event

    //  //  // Enter Page Specific Code here

    let r = 0
    let g = 0
    let b = 0

function crazyLines () {
    if (r<255) r+=4

    width = width -12
    height = height -5
    for (let i = 0; i < 60; ++i) {

        context.strokeStyle = `rgb(${r},${g},${b})`
        x = Math.round(Math.random()*width)
        y = Math.round(Math.random()*height)
        dx = Math.round(Math.random()*width)
        dy = Math.round(Math.random()*height)

        context.beginPath()
        context.moveTo(x,y)
        context.lineTo(dx,dy)
        context.stroke()
        cl('here')
    }
    if (width >0)
        requestAnimationFrame(crazyLines)
}
crazyLines()

}   // end drawScreen wrapper
}   // end onload wrapper