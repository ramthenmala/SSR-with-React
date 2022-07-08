const express = require('express');

const app = express();

app.get('/', (_req, res) => {
    res.send('Hi')
})

app.listen(3333, () => {
    console.log('Listening on port');
})