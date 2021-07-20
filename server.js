const express = require('express');
const cors = require('cors');

const app = express();

const corsOptions = {
  origin: 'http://localhost:8081'
};

const config = require('./config/config');

const db = require("./models/index.js");
db.sequelize.sync();

app.use(cors(corsOptions));

// parse application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));


require("./routes/product.routes.js")(app);
require("./routes/category.routes.js")(app);
require("./routes/user.routes.js")(app);

//Server listening
app.listen(config.api_port,() => {
  console.log(`Server started on port ${config.api_port}`);
});
