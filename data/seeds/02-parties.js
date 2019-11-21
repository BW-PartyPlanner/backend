exports.seed = function(knex) {
  return knex("parties").insert([
    {
      name: "test party",
      date: "2019-11-19",
      budget: 5000
    },
    {
      name: "test party2",
      date: "2019-11-19",
      budget: 300
    },
    {
      name: "test party3",
      date: "2019-11-19",
      budget: 1000
    },
    {
      name: "test party4",
      date: "2019-11-19",
      budget: 500
    },
    {
      name: "test party5",
      date: "2019-11-19",
      budget: 0
    }
  ]);
};
