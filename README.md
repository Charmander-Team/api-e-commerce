# api_e_commerce

# * Step 1:
````
$npm install
````

&nbsp;
*(to create 'node_modules' folder)*

---

# * Step 2
edit index.js (database connection)
````js
const connDB = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'root',
  database: 'eshop_pkm'
});
````

---

# * Step 3
````
$npm start
````