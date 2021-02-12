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

    r = 0
    g = 0
    b = 0

function crazyLines () {

    if (r<255) r+=.1

    context.strokeStyle = `rgb(${r},${g},${b})`
    x = Math.round(Math.random()*window.innerWidth)
    y = Math.round(Math.random()*window.innerHeight)
    dx = Math.round(Math.random()*window.innerWidth)
    dy = Math.round(Math.random()*window.innerHeight)

    context.beginPath()
    context.moveTo(x,y)
    context.lineTo(dx,dy)
    context.stroke()

    requestAnimationFrame(crazyLines)
}

crazyLines()

}   // end drawScreen wrapper
}   // end onload wrapper