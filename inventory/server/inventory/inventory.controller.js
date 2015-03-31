'use strict';

var Inventory = require('./inventory.model');

// Retrieves and returns the inventory from the database.
exports.index = function(req, res) {
  Inventory.find({}, function (err, inventory) {
    if(err) return res.send(500, err);
    res.json(200, inventory);
  });
};
