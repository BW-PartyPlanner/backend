exports.seed = function(knex) {
  return knex("users").insert([
    {
      first_name: "test",
      last_name: "test",
      username: "username1",
      password: "password1",
      avatar: "https://www.testurl.com"
    },
    {
      first_name: "test2",
      last_name: "test2",
      username: "username2",
      password: "password",
      avatar: "https://www.testurl.com"
    },
    {
      first_name: "test3",
      last_name: "test3",
      username: "username3",
      password: "password",
      avatar: "https://www.testurl.com"
    }
  ]);
};
