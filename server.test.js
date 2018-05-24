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
        /* console.log('ECHEC' + '\n' + err);
        exit(0); */
        // au succes on retourne 200
        return Promise.resolve(200);
    }
    else{
        /* console.log('REUSSITE');
        exit(0); */
        return Promise.resolve(404);
    }
});
