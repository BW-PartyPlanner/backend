exports.seed = function(knex) {
  return knex("items").insert([
    {
      name: "bring chairs",
      description: "We need to bring 10 chairs to the party",
      cost: 0,
      user_id: 1,
      party_id: 1,
      isAccountedFor: "false"
    },
    {
      name: "hire band",
      description: "We need to hire a band for 2 hours",
      cost: 300,
      user_id: 1,
      party_id: 1,
      isAccountedFor: "false"
    },
    {
      name: "bring greenbean casserole",
      description: "We need to bring greenbean casserole for 10 people",
      cost: 0,
      user_id: 2,
      party_id: 1,
      isAccountedFor: "false"
    },
    {
      name: "bring chairs",
      description: "We need to bring 10 chairs to the party",
      cost: 0,
      user_id: 2,
      party_id: 2,
      isAccountedFor: "false"
    },
    {
      name: "hire band",
      description: "We need to hire a band for 2 hours",
      cost: 300,
      user_id: 3,
      party_id: 3,
      isAccountedFor: "false"
    },
    {
      name: "bring greenbean casserole",
      description: "We need to bring greenbean casserole for 10 people",
      cost: 0,
      user_id: 3,
      party_id: 4,
      isAccountedFor: "false"
    },
    {
      name: "bring chairs",
      description: "We need to bring 10 chairs to the party",
      cost: 0,
      user_id: 3,
      party_id: 4,
      isAccountedFor: "false"
    },
    {
      name: "hire band",
      description: "We need to hire a band for 2 hours",
      cost: 300,
      user_id: 0,
      party_id: 5,
      isAccountedFor: "false"
    },
    {
      name: "bring greenbean casserole",
      description: "We need to bring greenbean casserole for 10 people",
      cost: 0,
      user_id: 0,
      party_id: 5,
      isAccountedFor: "false"
    }
  ]);
};
