import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home.js'

const app = express();

app.get('/', (req, res) => {
  const content = renderToString(<Home/>)
  res.send(content)
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})