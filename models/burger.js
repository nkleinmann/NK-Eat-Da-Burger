// Import the ORM to create functions that will interact with the database.
const dbManager = require("../config/burgerDbManager");

let burger = {
  selectAll: function() {
    return dbManager.selectAll("burgers");
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals) {
    return dbManager.insertOne("burgers", cols, vals);
  },
  updateOne: function(objColVals, condition) {
    return dbManager.updateOne("burgers", objColVals, condition);
  },
  deleteOne: function(condition) {
    return dbManager.deleteOne("burgers", condition);
  }
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;