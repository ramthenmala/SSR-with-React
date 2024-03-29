import express from 'express';
import renderer from './helpers/renderer.js';

const app = express();

app.use(express.static('public'))

app.get('*', (req, res) => {
  res.send(renderer(req));
})

app.listen(3000, () => {
  console.log('Server is running on port 3000');
})