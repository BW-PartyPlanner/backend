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
    .insert(party)
    .returning("id");
}

function find() {
  return db("parties");
}

function findBy(filter) {
  return db("parties").where(filter);
}

function findById(id) {
  return db("parties").where({ id });
}

function update(id, changes) {
  return db("parties")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("parties")
    .where({ id })
    .del();
}
