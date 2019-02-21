const knexConfig = require('../knexfile.js');

const db = knex(knexConfig.development);

module.exports = {
    getRecipes,
    addRecipe,
    getRecipe,
}

function getRecipes() {
    return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dishId')
    .select('r.id', 'r.name', 'r.directions', 'd.name as DishName');
}

function addRecipe(recipe) {
    return db('recipes')
    .insert(recipe)
    .then(id => {
        return id
    });
}

function getRecipe(id) {
    return db('recipes as r')
    .join('dishes as d', 'd.id', 'r.dishId')
    .join('recipe-ingredients as ri', 'ri.recipeId', 'r.id')
    .join('ingredients as i', 'i.id', 'ri.ingredientId')
    .select('d.name', 'r.name', 'ri.quantity  i.name')
    .where({id});
}