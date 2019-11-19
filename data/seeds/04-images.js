exports.seed = function(knex) {
  return knex("images")
    .insert([{ img_url: "https://www.testurl.com", party_id: 1 }])
    .insert([{ img_url: "https://www.testurltwo.com", party_id: 1 }]);
};
