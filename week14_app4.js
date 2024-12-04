const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.status(200).send('<h1>Welcom !!</h1>');
});

app.get('/about', (req, res) => {
    res.status(200).send('<h1>Welcom About!!</h1>');
});

app.listen(500);
