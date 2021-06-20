function setup() {
    const canvas = createCanvas(320, 240);
    pixelDensity(1);
    background(0);

    let lat, long;
    document.getElementById('submit').addEventListener('click', async event => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        canvas.loadPixels();
        const image64 = canvas.elt.toDataURL();
        const data = { lat, long, name, age, image64 };
        const options = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        };
        const response = await fetch('/api', options);
        const json = await response.json();
        console.log(json);
    });

    if ('geolocation' in navigator) {
        console.log('geolocation is available!');
        navigator.geolocation.getCurrentPosition(async position => {

            lat = position.coords.latitude;
            long = position.coords.longitude;
            //console.log(lat);
            //console.log(long);
            document.getElementById('latitude').textContent = lat;
            document.getElementById('longitude').textContent = long;

        });
    } else {
        console.log('geolocation is not available!');
    }

    function keyPressed() {
        if (key == 'c') {
            background(0);
        }
    }

    function draw() {
        stroke(255);
        strokeWeight(8);
        if (mouseIsPressed) {
            line(pmouseX, pmouseY, mouseX, mouseY);
        }
    }

}