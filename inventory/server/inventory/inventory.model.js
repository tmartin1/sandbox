'use strict';

var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var InventorySchema = new Schema({
  items: []
});

module.exports = mongoose.model('Inventory', InventorySchema);
