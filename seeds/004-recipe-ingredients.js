
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipe-ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipe-ingredients').insert([
        {recipeId: 1, quantity: 3, ingredientId: 9},
        {recipeId: 1, quantity: 1.5, ingredientId: 5},
        {recipeId: 1, quantity: 1, ingredientId: 6},
        {recipeId: 1, quantity: 3, ingredientId: 12},
        {recipeId: 1, quantity: 1, ingredientId: 10},
        {recipeId: 2, quantity: 1, ingredientId: 1},
        {recipeId: 2, quantity: 1.5, ingredientId: 8},
        {recipeId: 3, quantity: 2, ingredientId: 3},
        {recipeId: 3, quantity: 1, ingredientId: 2},
        {recipeId: 4, quantity: 1, ingredientId: 4},
        {recipeId: 4, quantity: 1, ingredientId: 1},
        {recipeId: 4, quantity: 1, ingredientId: 6},
        {recipeId: 5, quantity: 2, ingredientId: 1},
        {recipeId: 5, quantity: 3.5, ingredientId: 11},
        {recipeId: 5, quantity: 1.5, ingredientId: 7},
        {recipeId: 5, quantity: 0.5, ingredientId: 10},
        {recipeId: 6, quantity: 5, ingredientId: 9},
        {recipeId: 6, quantity: 1, ingredientId: 10},
        {recipeId: 6, quantity: 1.5, ingredientId: 6}
        
      ]);
    });
};
