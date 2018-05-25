exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('robots').truncate()
    .then(() => {
      return knex('robots').insert([
        {id: 0, date_added: new Date, first_active: new Date, current_name: "Robot1", height: 5.5, weight: 55 , intelligence_metric: 15},
        {id: 1, date_added: new Date, first_active: new Date, current_name: "Robot2", height: 5.7, weight: 57, intelligence_metric: 10},
        {id: 2, date_added: new Date, first_active: new Date, current_name: "Robot3", height: 5.3, weight: 100, intelligence_metric: 5}
      ]);
    });
};
