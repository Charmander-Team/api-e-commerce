# api_e_commerce

* Step 1:
$npm install

* Step 2
edit index.js (database connection)
````js
const connDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'eshop_pkm'
});
````

* Step 3
$npm start