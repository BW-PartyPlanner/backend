const db = require("../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove,

  getPartyImages,
  getPartyItems
};

function insert(party) {
  return db("parties")
    .insert(party, "party")
    .then(ids => {
      const [id] = ids;
      return findById(id);
    });
}

function find() {
  return db("parties");
}

function findBy(name) {
  return db("parties")
    .select("id", "name", "date", "budget")
    .where(name);
}

function findById(id) {
  return db("parties")
    .select("id", "name", "date", "budget")
    .where("id", id)
    .first();
}

function update(id, changes) {
  return db("parties")
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
  return db("parties")
    .where("id", id)
    .del();
}

function getPartyImages(id) {
  return db("images")
    .select("img_url", "party_id")
    .where("party_id", "=", id);
}

function getPartyItems(id) {
  return db("items")
    .select("name", "description", "cost", "party_id", "user_id")
    .where("party_id", "=", id);
}

//getPartyUsers "guests" shows if they are the creator or not as well as the users info, join users and user_party table
