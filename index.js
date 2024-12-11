const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
const app=require('./app.js');

app.use(express.static('static'));

app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
