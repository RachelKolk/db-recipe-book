
exports.up = function(knex, Promise) {
    return knex.schema.createTable('dishes', function(tbl) {
        tbl.increments();

        tbl.string('name', 128)
        .nutNullable();
    });
  
};

exports.down = function(knex, Promise) {
    return knex.schema.dropTableIfExists('dishes');
};
