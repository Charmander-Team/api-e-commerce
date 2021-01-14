# api_e_commerce

# Prequel:
### Create a database DB:
connect at your sql server:
````shell
$ mysql -u 'username' -p
````

do:
````sql
CREATE DATABASE eshop_pkm CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;
````
then exit:
````sql
exit;
````

### The DUMP:
You need to export the DB already done in your DB:
``````sql
mysql -u 'username' -p dbname < config/eshop_pkm-dump.sql
``````

# Step 1:
```shell
$ npm install
```

&nbsp;
*(to create 'node_modules' folder)*

---

# Step 2
Follow the instructions in `config/config.example`


---

# Step 3
```shell
$ npm start
```