const db = require("../../data/db-config");

module.exports = {
  find,
  findBy,
  findById,
  insert,
  update,
  remove
};

function insert(image) {
  return db("images")
    .insert(image)
    .returning("id");
}

function find() {
  return db("images");
}

function findBy(filter) {
  return db("images").where(filter);
}

function findById(id) {
  return db("images").where({ id });
}

function update(id, changes) {
  return db("images")
    .where({ id })
    .update(changes);
}

function remove(id) {
  return db("images")
    .where({ id })
    .del();
}
