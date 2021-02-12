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

    r = 255
    g = 255
    b = 255

interval = Math.round(window.innerWidth)/70
x = 0

function draw () {
 x +=interval
    if (x<innerWidth) {

       context.strokeStyle = `rgb(${r},${g},${b})`

       context.beginPath()
       context.moveTo(0,0)
       context.lineTo(x,innerHeight)
       context.stroke()

       context.beginPath()
       context.moveTo(innerWidth,0)
       context.lineTo(x,innerHeight)
       context.stroke()

       requestAnimationFrame(draw)

    }
}




draw()

}   // end drawScreen wrapper
}   // end onload wrapper