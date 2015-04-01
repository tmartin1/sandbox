var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var BeerSchema = new Schema({
  name: String,
  brewer: String,
  abv: Number,
  malt: [String],
  hops: [String]
  note: String
});

module.exports = mongoose.model('Beer', BeerSchema);
