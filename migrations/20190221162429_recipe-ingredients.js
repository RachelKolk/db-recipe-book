
exports.up = function(knex, Promise) {
    return knex.schema.createTable('recipe-ingredients', function(tbl) {
        tbl
          .integer('recipeId')
          .unsigned()
          .references('id')
          .inTable('recipes')
          

        tbl
          .integer('ingredientId')
          .unsigned()
          .references('id')
          .inTable('ingredients')
        
        tbl
          .float('quantity')
          .notNullable();
    });
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('recipe-ingredients');
};
