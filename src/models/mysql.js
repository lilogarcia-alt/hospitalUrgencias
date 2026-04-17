const mysql= require('mysql/promise')

const pool = mysql.createPool({
    host:process.env.HOST,
    user:process.env.USER,
    password:process.env.PASS,
    database: process.env.NAME

});

module.exports = pool;