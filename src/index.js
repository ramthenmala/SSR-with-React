const express = require('express');
const react = require('react');
const renderToString = require('react-dom/server').renderToString();
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (_req, res) => {
    const content = renderToString(<Home/>)
    res.send(content);
})

app.listen(3333, () => {
    console.log('Listening on port');
})