exports.seed = function(knex) {
  return knex("user_party")
    .insert([{ user_id: 1, party_id: 1, creator: "true" }])
    .insert([{ user_id: 2, party_id: 1, creator: "false" }]);
};
