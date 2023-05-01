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

app.get('/data/:id', (req, res) => {
    const id = req.params.id;
    console.log(id)
    const singleData = data.find(item => item.chef_id === id);
    res.send(singleData);
})

app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});