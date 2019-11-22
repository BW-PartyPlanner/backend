exports.up = function(knex) {
  return (
    knex.schema

      //users table
      .createTable("users", tbl => {
        tbl.increments();
        tbl.string("first_name", 255).notNullable();
        tbl.string("last_name", 255).notNullable();
        tbl
          .string("username", 255)
          .notNullable()
          .unique();
        tbl.string("password", 255).notNullable();
        tbl.string("avatar", 255);
      })

      //parties table
      .createTable("parties", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.string("date");
        tbl
          .integer("budget")
          .default(0)
          .notNullable();
      })

      //items table
      .createTable("items", tbl => {
        tbl.increments();
        tbl.string("name", 255).notNullable();
        tbl.string("description", 500);
        tbl
          .integer("cost")
          .default(0)
          .notNullable();
        tbl
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .default(0)
          .notNullable();
        tbl
          .integer("party_id")
          .unsigned()
          .references("id")
          .inTable("parties")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .notNullable();
        tbl
          .boolean("isAccountedFor")
          .default("false")
          .notNullable();
      })

      //images table
      .createTable("images", tbl => {
        tbl.increments();
        tbl.string("img_url", 500).notNullable();
        tbl
          .integer("party_id")
          .unsigned()
          .references("id")
          .inTable("parties")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .notNullable();
      })

      //user_party table
      .createTable("user_party", tbl => {
        tbl.increments();
        tbl
          .integer("user_id")
          .unsigned()
          .references("id")
          .inTable("users")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .notNullable();
        tbl
          .integer("party_id")
          .unsigned()
          .references("id")
          .inTable("parties")
          .onDelete("RESTRICT")
          .onUpdate("CASCADE")
          .notNullable();
        tbl
          .boolean("creator")
          .default("false")
          .notNullable();
      })
  );
};

exports.down = function(knex) {
  //opposite of how they were created
  return knex.schema
    .dropTableIfExists("user_party")
    .dropTableIfExists("images")
    .dropTableIfExists("items")
    .dropTableIfExists("parties")
    .dropTableIfExists("users");
};
