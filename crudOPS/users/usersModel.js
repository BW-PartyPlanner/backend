const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById
};

function add(user) {
  return db("users")
    .insert(user)
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("users as u").select(
    "u.id",
    "u.first_name",
    "u.last_name",
    "u.email",
    "u.img"
  );
}

function findBy(filter) {
  return db("users").where(filter);
}

function findById(id) {
  return db("users")
    .select("id", "username")
    .where({ id })
    .first();
}
