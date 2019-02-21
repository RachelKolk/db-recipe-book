
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('ingredients').del()
    .then(function () {
      // Inserts seed entries
      return knex('ingredients').insert([
        {id: 1, name: 'noodles', measurementTxt: '16 oz box'},
        {id: 2, name: 'chocolate pudding', measurementTxt: '3.5 oz box'},
        {id: 3, name: 'milk', measurementTxt: 'cup'},
        {id: 4, name: 'chicken', measurementTxt: 'lb'},
        {id: 5, name: 'ground beef', measurementTxt: 'lb'},
        {id: 6, name: 'onion', measurementTxt: 'large'},
        {id: 7, name: 'cheese', measurementTxt: 'cup'},
        {id: 8, name: 'cheese sauce', measurementTxt: 'cup'},
        {id: 9, name: 'diced tomato', measurementTxt: 'cup'},
        {id: 10, name: 'diced peppers', measurementTxt: 'cup'},
        {id: 11, name: 'spaghetti sauce', measurementTxt: 'cup'},
        {id: 12, name: 'beans', measurementTxt: 'cup'}
      ]);
    });
};
