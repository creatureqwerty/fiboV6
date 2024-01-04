const express = require('express');

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
});

app.get('/s', (req, res) => {
    res.send('sssssssssssssssssss');
});

app.listen(4000, () => {
    console.log('Listening on port 4000');
});