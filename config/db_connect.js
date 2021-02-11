const mysql = require('mysql');
const config = require('./config');

//create database connection
const connDB = mysql.createConnection({
    host: config.sql_config.host,
    user: config.sql_config.user,
    password: config.sql_config.password,
    database: config.sql_config.database
});

//connect to database
connDB.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

module.exports = connDB;