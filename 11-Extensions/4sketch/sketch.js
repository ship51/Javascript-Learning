
console.log("Working in sketch.js");


var s = function (sketch) {

    sketch.setup = function() {

        document.body.style['userSelect'] = 'none';
        console.log("Working in Setup");
        let c = sketch.createCanvas(sketch.windowWidth, sketch.windowHeight);
        c.position(0, 0);
        c.style('pointer-events', 'none');
        sketch.clear();
    }

    sketch.draw = function() {
        console.log("Working in Draw");
        //background(255);
        sketch.stroke(255, 0, 0);
        sketch.strokeWeight(4);
        if (sketch.mouseIsPressed) {
            sketch.line(sketch.mouseX, sketch.mouseY, sketch.pmouseX, sketch.pmouseY);
        }
    }
};


var myp5 = new p5(s);
