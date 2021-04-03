'use strict';

const express = require('express');
const path = require('path');
const app = express();

//constants
const PORT = 80;
const HOST = '0.0.0.0';



app.use(express.static(path.join(__dirname, 'build')));

app.get('/', function (req, res) {
  res.send('Hello world!');
});


app.listen(PORT, () =>{
  console.log(`Running on http://localhost:${PORT}`)
});

