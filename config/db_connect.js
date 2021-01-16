const mysql = require('mysql');
const config = require('./config');

//create database connection
const connDB = mysql.createConnection({
    host: config.host,
    user: config.user,
    password: config.password,
    database: config.database
});

//connect to database
connDB.connect((err) =>{
    if(err) throw err;
    console.log('Mysql Connected...');
});

module.exports = connDB;