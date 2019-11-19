exports.seed = function(knex) {
  return knex("items")
    .insert([
      {
        name: "bring chairs",
        description: "We need to bring 10 chairs to the party",
        cost: 0,
        user_id: 1,
        party_id: 1
      }
    ])
    .insert([
      {
        name: "bring greenbean casserole",
        description: "We need to bring greenbean casserole for 10 people",
        cost: 0,
        user_id: 2,
        party_id: 1
      }
    ])
    .insert([
      {
        name: "hire band",
        description: "We need to hire a band for 2 hours",
        cost: 300,
        user_id: 1,
        party_id: 1
      }
    ]);
};
