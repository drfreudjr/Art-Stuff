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

    let r = 100
    let g = 100
    let b = 100

    let fib = [0,1]   // seed fibonachi

    for (i=2; i < 200; ++i) {
        fib[i] = fib[i-1] + fib[i-2]
    }

    cl(fib)

    let width = innerWidth
    let height = innerHeight

function crazyLines () {

    if (r<255) r+=.1

    context.strokeStyle = `rgb(${r},${g},${b})`

    for (i=0; i<25; ++i){
        // context.beginPath()
        // context.moveTo(fib[i],0)
        // context.lineTo(0,innerHeight)
        // context.stroke()

        context.beginPath()
        context.moveTo(innerWidth,0)
        context.lineTo(innerWidth-fib[0],innerHeight)
        context.stroke()
    }


    // requestAnimationFrame(crazyLines)
}
crazyLines()

}   // end drawScreen wrapper

}   // end onload wrapper