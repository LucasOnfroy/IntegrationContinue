var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "integrationcontinue",
    password: "integrationcontinue"
});

con.connect(function (err) {
    if (err) throw err;
    console.log("Connected!");
});