const express = require('express');
const bodyParser = require('body-parser');
const app = express();

const createRoutes = require('./routes');

// parse application/json
app.use(bodyParser.json());

createRoutes(app);

//Server listening
const port = 3000;
app.listen(port,() =>{
  console.log('Server started on port 3000');
  console.log(`Visit: http://localhost:${port}/api/products/`);
  console.log(`Visit: http://localhost:${port}/api/products/pikachu`);
});