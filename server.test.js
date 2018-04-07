'use strict';
require('./bootstrap');
console.log('TEST UNITAIRE DE CONNEXION A LA BDD');

var con = mysql.createConnection({
    host: config.api.host,
    port: config.api.port,
    user: config.api.user,
    password: config.api.password,
    database: config.api.database,
});

con.connect(function (err) {
    if (err) {
        console.log('ECHEC');
        throw err;
    }
    else{
        console.log('REUSSITE');
    }
});