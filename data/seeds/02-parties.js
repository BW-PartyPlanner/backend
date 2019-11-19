exports.seed = function(knex) {
  return knex("parties").insert([
    {
      name: "test party",
      date: "2019-11-19",
      budget: 5000
    }
  ]);
};
