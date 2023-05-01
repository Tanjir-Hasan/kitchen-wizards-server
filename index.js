const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());

const data = require('./data/data.json');

app.get('/', (req, res) => {
  res.send('kitten is on');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});