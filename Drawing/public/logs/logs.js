getData();
async function getData() {

    const response = await fetch('/api');
    //console.log(response);
    const data = await response.json();

    for (item of data) {
        const root = document.createElement('p');
        const person = document.createElement('div');
        const geo = document.createElement('div');
        const date = document.createElement('div');
        const image = document.createElement('img');

        person.textContent = `Name: ${item.name}, Age: ${item.age}`;
        geo.textContent = `Geolocation: ${item.lat} °, ${item.long} °`;
        const dateString = new Date(item.timestamp).toLocaleString();
        date.textContent = `Date and time: ${dateString}`;
        image.src = item.image64;
        image.alt = 'Selfie';

        root.append(person, geo, date, image);

        document.body.append(root);

    }
    console.log(data);
}