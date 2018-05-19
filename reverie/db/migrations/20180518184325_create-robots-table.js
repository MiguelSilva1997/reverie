
exports.up = function(knex, Promise) {
  let createQuery = `CREATE TABLE robots(
    id SERIAL PRIMARY KEY NOT NULL,
    date_added DATE,
    first_active DATE,
    current_name TEXT,
    height float,
    weight float,
    intelligence_metric INTEGER NOT NULL CHECK (intelligence_metric <= 20 AND intelligence_metric >= 1)
  )`
  return knex.raw(createQuery)
};

exports.down = function(knex, Promise) {
  let dropQuery = `DROP TABLE robots`
  return knex.raw(dropQuery)
};
