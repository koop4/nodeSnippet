const express = require('express');

const app = express();

app.listen(3000, () => {
    console.log('listening to 3000')
});


app.get('/', (req, res) => {
    res.status(200).sendFile(__dirname + '/index.html');
})


app.get('/contact', (req, res) => {
    res.status(200).sendFile(__dirname + '/contact.html');
})


app.get('/user/:name', (req, res) => {
    res.status(200).send('requested user ' + req.params.name);
})


app.get('/*', (req, res) => {
    res.status(404).sendFile(__dirname + '/404.html');
})