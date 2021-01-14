const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const env = require('./env/env')

const createRoutes = require('./routes');

// parse application/json
app.use(bodyParser.json());

createRoutes(app);

//Server listening

app.listen(env.port,() =>{
  console.log(`Server started on port ${env.port}`);
  console.log(`Visit: http://localhost:${env.port}/api/products/`);
  //console.log(`Visit: http://localhost:${port}/api/products/pikachu`);
});