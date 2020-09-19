// Import the ORM to create functions that will interact with the database.
const dbManger = require("../config/burgerDbManager.js");

let burger = {
  selectAll: function() {
    return dbManger.selectAll("burgers");
  },
  // The variables cols and vals are arrays.
  insertOne: function(cols, vals) {
    return dbManger.insertOne("burgers", cols, vals);
  },
  updateOne: function(objColVals, condition) {
    return dbManger.updateOne("burgers", objColVals, condition);
  },
  deleteOne: function(condition) {
    return dbManger.deleteOne("burgers", condition);
  }
};
  
  // Export the database functions for the controller (catsController.js).
  module.exports = burger;