const db = require("../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove
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
