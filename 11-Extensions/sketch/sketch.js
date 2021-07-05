
console.log("Working in sketch.js");

function setup() {

    console.log("Working in Setup");
    let c = createCanvas(windowWidth, windowHeight);
    c.position(0.0);
    clear();
}


function draw() {
    console.log("Working in Draw");
    background(255);
    stroke(0);
    strokeWeight(4);
    if (mouseIsPressed) {
        line(mouseX, mouseY, pmouseX, pmouseY);
    }

    
}