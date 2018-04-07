'use strict';
require('./bootstrap');

console.log(config);
var con = mysql.createConnection({
    host: config.HOST,
    port: config.PORT,
    user: config.USER,
    password: config.PASSWORD,
    database: config.DATABASE
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateurs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});