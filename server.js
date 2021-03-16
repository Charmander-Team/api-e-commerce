const express = require('express');
const mongoose = require('mongoose');

const app = express();

const api_port = 3000;

const createRoutes = require('./routes/routes.js');

// parse application/json
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/eshop_pkm');

// Same origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

createRoutes(app);

//Server listening
app.listen(api_port,() =>{
  console.log(`Server started on port ${api_port}`);
  console.log(`Visit: http://localhost:${api_port}/cards/`);
});