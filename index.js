const express = require('express')
const Datastore = require('nedb');
const app = express()
app.listen(3000, () => console.log('Listening at 3000'));
app.use(express.static('public'));
app.use(express.json({ limit: '1mb' }));

const database = new Datastore('database.db');
database.loadDatabase();

// database.insert({ name: 'Chad', status: 'YES'});
// database.insert({ name: 'Max', status: 'NO'});

app.post('/api', (request, response) => {
    console.log('I got a request!');
    console.log(request.body);
    const data = request.body;
    const timestamp = Date.now();
    data.timestamp = timestamp;

    database.insert(data);

    response.json({
        status: 'Success',
        latitude: data.lat,
        longitude: data.long,
        timestamp: timestamp
    });
});

