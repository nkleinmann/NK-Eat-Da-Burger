// Import the ORM to create functions that will interact with the database.
const orm = require("../config/orm.js");

let burger = {
  selectAll: function() {
    return orm.selectAll("burgers");
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals) {
    return orm.insertOne("burgers", cols, vals);
  },
  updateOne: function(objColVals, condition) {
    return orm.updateOne("burgers", objColVals, condition);
  },
  deleteOne: function(condition) {
    return orm.deleteOne("burgers", condition);
  }
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;