const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    getDishes,
    addDish,
    getDish,
};

function getDishes() {
    return db('dishes');
}

function addDish(dish) {
    return db('dishes')
    .insert(dish)
    .then(id => {
        return id
    });
}

function getDish(id) {
    return db('dishes')
    .where({id})
    .first();
}

