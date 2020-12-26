const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const mysql = require('mysql');

// parse application/json
app.use(bodyParser.json());

//create database connection
const connDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'eshop_pkm'
});

//connect to database
connDB.connect((err) =>{
  if(err) throw err;
  console.log('Mysql Connected...');
});

//show all products
app.get('/api/products',(req, res) => {
  const sql = "SELECT * FROM product";
  const query = connDB.query(sql, (err, results) => {
    if(err) throw err;
    //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
    res.send(results);
  });
});

//show all user
app.get('/api/users',(req, res) => {
    const sql = "SELECT * FROM user";
    const query = connDB.query(sql, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
});


/*
//show single product
app.get('/api/products/:id',(req, res) => {
  let sql = "SELECT * FROM product WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
});
 */

//add new product
app.post('/api/products',(req, res) => {
  const data = { 
    id: 2, 
    ref: "test", 
    category_id: 3, 
    name: "salameche", 
    energy_type : "fire",
    level: 15,
    card_number: 30,
    bid: null,
    price: 50,
    delete: null
  };
  const sql = "INSERT INTO product SET ?";
  const query = connDB.query(sql, data,(err, results) => {
    if(err) throw err;
    res.send(results);
  });
});
 /*
//update product
app.put('/api/products/:id',(req, res) => {
  let sql = "UPDATE product SET product_name='"+req.body.product_name+"', product_price='"+req.body.product_price+"' WHERE product_id="+req.params.id;
  let query = conn.query(sql, (err, results) => {
    if(err) throw err;
    res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
  });
 */

//Delete product
app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id=5";
  let query = connDB.query(sql, (err, results) => {
    if(err) throw err;
      res.send(results);
  });
});

//Server listening
const port = 3000;
app.listen(port,() =>{
  console.log('Server started on port 3000');
  console.log('Visit: http://localhost:' + port + "/api/products");
  console.log('Visit: http://localhost:' + port + "/api/users");
});