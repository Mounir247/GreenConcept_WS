'use strict'

var mysql = require('mysql');


let con = mysql.createConnection({
    host: "localhost",
    port: "3308",
    user: "root",
    password: "",
    database: "greenconcept"
  });

  module.exports.con = con;