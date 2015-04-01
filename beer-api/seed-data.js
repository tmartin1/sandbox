// Populate DB with sample data on server start.

var Beer = require('./app/models/beer');

Beer.find({}).remove(function() {
  Beer.create({
    name: 'Mirror Pond Pale Ale',
    brewer: 'Deschutes',
    abv: 5.0,
    malt: [ 'Pale', 'NW Pale', 'Crystal', 'Carapils' ],
    hops: [ 'Cascade' ],
    note: 'Mirror Pond Pale Ale is the quintessential northwest pale ale. Cascade hops and more Cascade hops give this tawny colored ale delicious hop-forward aroma and flavor. Pale malt allows the hops to linger, not overpower.'
  },
  function() {
    console.log('Finished populating beers.');
  });
});
