'use strict';
global.logger = require('./logger');
global.config = require('./config')(logger);
global._ = require('lodash');
global.Boom = require('boom');
global.mysql = require('mysql');