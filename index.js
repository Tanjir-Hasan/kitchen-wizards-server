const express = require('express');
const app = express();
const cors = require('cors');
const port = process.env.port || 5000;
app.use(cors());

const data = require('./data/data.json');
const seasonalRecipe = require('./data/seasonalRecipe.json');
const toolsAndGadgets = require('./data/toolsAndGadgets.json');

app.get('/', (req, res) => {
  res.send('kitten is on');
});

app.get('/data', (req, res) => {
    res.send(data);
});

app.get('/seasonalRecipe', (req, res) => {
    res.send(seasonalRecipe);
});

app.get('/toolsAndGadgets', (req, res) => {
    res.send(toolsAndGadgets);
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