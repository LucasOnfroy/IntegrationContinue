'use strict';

module.exports = (logger) => {
    return require('common-env/withLogger')(logger).getOrElseAll({
        api: {
            host: '51.15.216.64',
            port: '33062',
            user: 'integrationcontinue_odl',
            password: 'JLora65SWeNJTqi',
            database: 'integrationcontinue_odl'
        }
    });
};