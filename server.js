const express = require('express');

const app = express();

const config = require('./config/config');

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.setHeader('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE, PATCH, OPTIONS');
  next();
});

const db = require("./models/index.js");
db.sequelize.sync();

// parse application/json
app.use(express.json());

// parse requests of content-type - application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: true }));

require("./routes/product.routes.js")(app);
require("./routes/category.routes.js")(app);
require("./routes/user.routes.js")(app);
require("./routes/user_address.routes.js")(app);
require("./routes/order.routes.js")(app);
require("./routes/order_content.routes.js")(app);
require("./routes/page.routes.js")(app);
require("./routes/stock.routes.js")(app);
require("./routes/nodemailer.routes.js")(app);

//Server listening
app.listen(config.api_port,() => {
  console.log(`Server started on port ${config.api_port}`);
});
