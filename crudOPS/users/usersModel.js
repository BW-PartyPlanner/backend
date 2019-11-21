const db = require("../../data/db-config");

module.exports = {
  insert,
  find,
  findBy,
  findById,
  update,
  remove,
  getUsersParties
  // getPartyImages,
  // getPartyItems
};

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
    .select("id", "username", "password")
    .where("username", username);
}

function findById(id) {
  return db("users")
    .where("id", id)
    .select("id", "username", "first_name", "last_name", "avatar")
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

function getUsersParties(id) {
  return db("user_party")
    .select(
      "user_id",
      "party_id",
      "creator",
      "parties.name",
      "parties.date",
      "parties.budget"
    )
    .join("parties", "party_id", "=", "parties.id")
    .where("user_id", "=", id);
}

// function getPartyImages(id) {
//   return db("images")
//     .select("img_url", "party_id")
//     .where("party_id", "=", id);
// }

// function getPartyItems(id) {
//   return db("items")
//     .select("name", "description", "cost", "party_id", "user_id")
//     .where("party_id", "=", id);
//

//this doesnt work, its using the user id passed in, needs to only use the user party's id only
