
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('recipes').del()
    .then(function () {
      // Inserts seed entries
      return knex('recipes').insert([
        {id: 1, name: 'Chili', dishId: 1, directions: 'Brown meat with onions. Throw everything in the pot with it. Cook.'},
        {id: 2, name: 'Mac and Cheese', dishId: 2, directions: 'Cook noodles. Add sauce.'},
        {id: 3, name: 'Chocolate Pudding', dishId: 3, directions: 'Box of pudding and milk. Follow box directions'},
        {id: 4, name: 'Chicken Noodle', dishId: 1, directions: 'Cook noodles and chicken separately. Throw in pot.'},
        {id: 5, name: 'Spaghetti Bake', dishId: 2, directions: 'Cook noddles. Empty canned sauce. Top with cheese. Bake.'},
        {id: 6, name: 'Gazpacho', dishId: 1, directions: 'Chop veg finely. Puree half. Combine.'}
      ]);
    });
};
