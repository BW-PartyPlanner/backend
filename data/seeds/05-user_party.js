exports.seed = function(knex) {
  return knex("user_party").insert([
    { user_id: 1, party_id: 1, creator: true },
    { user_id: 2, party_id: 2, creator: true },
    { user_id: 3, party_id: 3, creator: true },
    { user_id: 1, party_id: 4, creator: true },
    { user_id: 2, party_id: 5, creator: true },

    { user_id: 2, party_id: 1, creator: false },
    { user_id: 3, party_id: 1, creator: false },

    { user_id: 1, party_id: 2, creator: false },
    { user_id: 3, party_id: 2, creator: false },

    { user_id: 1, party_id: 3, creator: false },
    { user_id: 2, party_id: 3, creator: false },

    { user_id: 2, party_id: 4, creator: false },
    { user_id: 3, party_id: 4, creator: false },

    { user_id: 1, party_id: 5, creator: false },
    { user_id: 3, party_id: 5, creator: false }
  ]);
};
