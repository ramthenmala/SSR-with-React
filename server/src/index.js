import express from 'express';
import React from 'react';
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home.js'

const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
  const content = renderToString(<Home/>)
  const html = `
    <html>
      <head>
        <title>SSR</title>
      </head>
      <body>
        <div id="root">${content}</div>
        <script src="bundle.js"></script>
      </body>
    </html>
  `;
  res.send(html);
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})