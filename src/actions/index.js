'use_strict';

module.exports = () => {
    return {
        insert: require('./insertdb'),
        update: require('./updatedb'),
        select: require('./selectdb'),
        delete: require('./deletedb')
    }
}