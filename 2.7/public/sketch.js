
function setup() {
    noCanvas();
    const video = createCapture(VIDEO);
    video.size(160, 120);

    let lat, long;
    document.getElementById('submit').addEventListener('click', async event => {
        const name = document.getElementById('name').value;
        const age = document.getElementById('age').value;
        video.loadPixels();
        const image64 = video.canvas.toDataURL();
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

}