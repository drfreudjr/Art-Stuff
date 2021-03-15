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

context.fillStyle = "blue"
context.fillRect(0,0,innerWidth,innerHeight)


document.body.style.backgroundColor = 'blue'

    r = 0
    g = 0
    b = 0

interval = Math.round(window.innerWidth)/350
x = 0

function draw () {
     b -= 2*g
     g -= 10/b
     r -= 2

     document.body.style.backgroundColor = `rgb(${r},${g+b},${b})`
 x +=interval
    if (x<2000) {
    for (i=0;i<1;++i) {
       context.strokeStyle = `rgb(${r},${g},${b})`

       context.beginPath()
       context.moveTo(0,0)
       context.lineTo(x,innerHeight)
       context.stroke()

       context.beginPath()
       context.moveTo(innerWidth,0)
       context.lineTo(x,innerHeight)
       context.stroke()

       context.beginPath()
       context.moveTo(0, innerHeight)
       context.lineTo(x,0)
       context.stroke()

       context.beginPath()
       context.moveTo(innerWidth,innerHeight)
       context.lineTo(x,0)
       context.stroke()

       requestAnimationFrame(draw)
    }
    }
}

draw()

}   // end drawScreen wrapper
}   // end onload wrapper