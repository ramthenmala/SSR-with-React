import express from 'express';
import helper from './helper/helper';

const app = express();

app.use(express.static('public'))
app.get('/', (req, res) => {
   
    res.send(helper());
})

app.listen(3333, () => {
    console.log('Listening on port');
})