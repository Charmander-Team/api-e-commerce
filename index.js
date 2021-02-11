const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config/config')

const createRoutes = require('./routes');

// parse application/json
app.use(bodyParser.json());

// Same origin
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

createRoutes(app);

//Server listening

app.listen(config.api_port,() =>{
  console.log(`Server started on port ${config.api_port}`);
  console.log(`Visit: http://localhost:${config.api_port}/products/`);
  console.log(`Visit: http://localhost:${config.api_port}/products/name/mimiqui`);
  console.log(`Visit: http://localhost:${config.api_port}/products/type/fire`);
  console.log(`Visit: http://localhost:${config.api_port}/products/ref/sm40`);
  console.log(`Visit: http://localhost:${config.api_port}/news/products/`);
});