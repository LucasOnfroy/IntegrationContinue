var mysql = require('mysql');

var con = mysql.createConnection({
    host: "localhost",
    user: "integrationcontinue",
    password: "integrationcontinue",
    database: "integrationcontinue"
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateurs", function (err, result, fields) {
        if (err) throw err;
        console.log(result);
    });
});