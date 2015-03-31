// SERVER SETUP

// Define any needed packages.
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');
var Beer = require('./app/models/beer');

// Connect to our database.
mongoose.connect('mongodb://localhost/beerDB');

// Configure app to use bodyParser().
// This will let us get the data from a POST.
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

var port = process.env.PORT || 9000;

// Create an instance of the express router.
var router = express.Router();

// DEFINE ROUTES FOR API
// ================================================================================================
var router = express.Router();

// Middleware to use for all requests.
router.use(function(req, res, next) {
  // do stuff...
  console.log('Connecting...');
  next(); // Go to the next routes.
});

// Add routes here:
router.route('/beers')
// Create a beer (accessed at POST http://localhost:8080/api/beers).
.post(function(req, res) {
  var beer = new Beer(); // Create a new instance of the Beer model.
  beer.name = req.body.name; // Set the beers name (comes from the request).
  // Save the beer and check for errors.
  beer.save(function(err) {
    if (err) res.send(err);
    res.json({ message: 'Beer successfully created.' });
  });
})
// Get all the beers (accessed at GET http://localhost:8080/api/beers).
.get(function(req, res) {
  Beer.find(function(err, beers) {
    if (err) res.send(err);
    res.json(beers);
  });
})
// Get a beer with a given id (accessed at GET http://localhost:8080/api/bears/:bear_id).
.get(function(req, res) {
  Beer.findById(req.params.bear_id, function(err, beer) {
    if (err) res.send(err);
    res.json(beer);
  });
})
// update the beer with this id (accessed at PUT http://localhost:8080/api/bears/:bear_id)
.put(function(req, res) {
  // use our beer model to find the beer we want
  Beer.findById(req.params.bear_id, function(err, beer) {
    if (err) res.send(err);
    beer.name = req.body.name;  // update the bears info
    // save the beer
    beer.save(function(err) {
      if (err) res.send(err);
      res.json({ message: 'Beer successfully updated.' });
    });
  });
})
// delete the beer with this id (accessed at DELETE http://localhost:8080/api/bears/:bear_id)
.delete(function(req, res) {
  Beer.remove({
    _id: req.params.bear_id
  }, function(err, beer) {
    if (err) res.send(err);
    res.json({ message: 'Beer successfully deleted.' });
  });
});

// Test route to make sure everything is working (accessed at GET http://localhost:9000/api)
router.get('/', function(req, res) {
  res.json({ message: 'Welcome to Beer API!' });
});

// REGISTER SERVER ROUTES
// ================================================================================================
app.use('/api', router);

// START THE SERVER
// ================================================================================================
app.listen(port);
console.log('BeerAPI connected on ' + port);
