exports.seed = function(knex) {
  return knex("users")
    .insert([
      {
        first_name: "unassigned",
        last_name: "unassigned",
        username: "username",
        password: "password",
        avatar: "https://www.testurl.com"
      }
    ])
    .insert([
      {
        first_name: "John",
        last_name: "Doe",
        username: "Gunbunny37th",
        password: "ilikechicken",
        avatar: "https://www.testurl.com"
      }
    ])
    .insert([
      {
        first_name: "jane",
        last_name: "Doe",
        username: "redleg134",
        password: "idontknow",
        avatar: "https://www.testurl.com"
      }
    ]);
};
