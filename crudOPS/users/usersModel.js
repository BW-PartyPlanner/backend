const db = require("../../data/db-config");

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove
};

// function insert(user) {
//   return db("users").insert(user);
// }
function insert(user) {
  return db("users")
    .insert(user, "id")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("users").select(
    "id",
    "username",
    "first_name",
    "last_name",
    "avatar"
  );
}

function findBy(username) {
  return db("users")
    .select("id", "username", "first_name", "last_name", "avatar")
    .where("username", username);
}

function findById(id) {
  return db("users")
    .select("id", "username", "first_name", "last_name", "avatar")

    .where("id", id)
    .first();
}

function update(id, changes) {
  return db("users")
    .where("id", id)
    .update(changes)
    .then(count => {
      if (count > 0) {
        return findById(id);
      } else {
        return null;
      }
    });
}

function remove(id) {
  return db("users")
    .where("id", id)
    .del();
}
