exports.seed = function(knex) {
  return knex("images").insert([
    { img_url: "https://www.testurl.com", party_id: 1 },
    { img_url: "https://www.testurl.com", party_id: 1 },
    { img_url: "https://www.testurl.com", party_id: 2 },
    { img_url: "https://www.testurl.com", party_id: 3 },
    { img_url: "https://www.testurl.com", party_id: 3 },
    { img_url: "https://www.testurl.com", party_id: 3 },
    { img_url: "https://www.testurl.com", party_id: 4 },
    { img_url: "https://www.testurl.com", party_id: 5 },
    { img_url: "https://www.testurl.com", party_id: 4 },
    { img_url: "https://www.testurl.com", party_id: 2 }
  ]);
};
