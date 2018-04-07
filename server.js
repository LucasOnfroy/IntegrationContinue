'use strict';
require('./bootstrap');

const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const packageJSON = require('./package');

/* server.connection({
    routes: {
        cors: {
            origin: ['*'],
            credentials: true
        }
    }
}); */

var con = mysql.createConnection({    
    host: config.api.host,
    port: config.api.port,
    user: config.api.user,
    password: config.api.password,
    database: config.api.database,
});

con.connect(function (err) {
    if (err) throw err;
    con.query("SELECT * FROM utilisateurs", function (err, result, fields) {
        if (err){
            throw err;
        } 
        else{
            console.log(result);
        }
    });
});

/* require('./src')(server).catch(err => {
    console.log("err", err);
    process.exit(1);
})
 */
/* server.register([Inert, Vision, {
    register: HapiSwagger,
    options: {
        info: {
            title: packageJSON.name,
            version: packageJSON.version,
        }
    },
    routes: {
        prefix: '/api'
    }
}, require('hapi-log-requests')(logger)], error => {
    server.start(err => {
        console.log(error || err || `Server running at ${server.info.uri}`);
    });
}); */