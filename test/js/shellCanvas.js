const cl = console.log;
window.onload = function () {           // onload wrapper
                                        // Global 2D context reference
var canvas;                             // Global canvas object reference
var context; 

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

let width = 0
let height = 0
let iteration = 1

let r = 0
let g = 0
let b = 0

function crazyLines () {
    iteration++


    if (r<255) r+=1

    // width = width +1.5
    // height = height +.6
    iteration++
    cyclesPerFrame = 100000

    for (let i = 0; i < cyclesPerFrame; ++i) {
        cyclesPerFrame=cyclesPerFrame- 2000

        context.strokeStyle = `rgb(${r},${g},${b})`
        x = Math.round(Math.random()*width*2)
        y = Math.round(Math.random()*height*2)
        dx = Math.round(Math.random()*innerWidth-width*2)
        dy = Math.round(Math.random()*innerHeight-height*2)

        context.beginPath()
        context.moveTo(x,y)
        context.lineTo(dx,dy)
        context.stroke()
        context.strokeStyle = `rgb(${r+=10},${g},${b})`
        context.fillRect(dx,dy,dx,dy)

    }
    // if (iteration < 600)
        requestAnimationFrame(crazyLines)
}


setTimeout(crazyLines(),0)
// setTimeout(fadeOut(), 1000000)

function fadeOut() {
    context.strokeStyle = 'black'
    context.fillRect(0,0,innerWidth, innerHeight)
}



cl('test')
}   // end drawScreen wrapper
}   // end onload wrapper