const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const config = require('./config/config')

const createRoutes = require('./routes');

// parse application/json
app.use(bodyParser.json());

createRoutes(app);

//Server listening

app.listen(config.port,() =>{
  console.log(`Server started on port ${config.port}`);
  console.log(`Visit: http://localhost:${config.port}/api/products/`);
  //console.log(`Visit: http://localhost:${port}/api/products/pikachu`);
});