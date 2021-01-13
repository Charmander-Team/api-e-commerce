const mysql = require('mysql');

const host = require('./sql/host');
const user = require('./sql/user');
const password = require('./sql/password');
const database = require('./sql/database');

//create database connection
const connDB = mysql.createConnection({
    host: host,
    user: user,
    password: password,
    database: database
});

//connect to database
connDB.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});


const showAllCards = (req, res) => {
    const sql = `SELECT * FROM product`;
    const query = connDB.query(sql, (err, results) => {
        if(err) throw err;
        //res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
        res.send(results);
    });
};

//show all user
/*app.get('/api/users',(req, res) => {
    const sql = "SELECT * FROM user";
    const query = connDB.query(sql, (err, results) => {
      if(err) throw err;
      res.send(results);
    });
});*/

const showCardByName = (req, res) => {
    let sql = `SELECT * FROM product WHERE name='${req.params.name}'`;
    let query = connDB.query(sql, (err, results) => {
        if(err) throw err;
        res.send(results)
    });
};



//add new product
/*app.post('/api/products',(req, res) => {
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
});*/
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
/*
app.delete('/api/products/:id',(req, res) => {
  let sql = "DELETE FROM product WHERE product_id=5";
  let query = connDB.query(sql, (err, results) => {
    if(err) throw err;
      res.send(results);
  });
});
*/


module.exports = {showAllCards, showCardByName};