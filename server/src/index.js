const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server').renderToString()
const Home = require('./client/components/Home').default;

const app = express();

app.get('/', (req, res) => {
  const content = ReactDOMServer(<Home/>)
  res.send(content)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})