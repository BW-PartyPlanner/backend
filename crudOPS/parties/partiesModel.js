const db = require("../../data/db-config");

module.exports = {
  add,
  find,
  findBy,
  findById,
  update,
  remove
};

function find() {
  return db("parties");
}

function findBy(filter) {
  return db("parties").where(filter);
}

function findById(id) {
  return db("parties")
    .where({ id })
    .first();
}

async function add(party) {
  return db("parties")
    .insert(party, "id")
    .then(ids => {
      return db("parties")
        .where({ id: ids[0] })
        .first();
    });
}

function update(id, changes) {
  return db("parties")
    .where({ id })
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
