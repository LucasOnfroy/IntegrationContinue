'use strict';
require('./bootstrap');

const Hapi = require('hapi');
const server = new Hapi.Server();
const Inert = require('inert');
const Vision = require('vision');
const HapiSwagger = require('hapi-swagger');
const packageJSON = require('./package');

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
