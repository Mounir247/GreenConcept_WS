'use strict'

var mysql = require('mysql');


let con = mysql.createConnection({
    host: "localhost",
    port: "3306",
    user: "root",
    password: "123456",
    database: ""
  });
  
  module.exports.con = con;