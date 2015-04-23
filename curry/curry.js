/*
  Write a function, curry, which takes a function as a parameter and returns a function that behaves as such:

  var curryAdd = curry(add);
  curryAdd(1,2,3); // returns 6
  curryAdd(1)(2,3); // returns 6
  curryAdd(1)(2)(3); // returns 6
  curryAdd(1,2); // returns a function
  curryAdd(1)(2); // returns a function

  var addFour = curryAdd(2,2);
  addFour(3); // returns 7
*/

// Write curry below.
var curry = function(fn) {
  var args = [];
  var argLength = fn.length;
  // we know curry will always return a function.
  return function() {
    args = args || [];
    args = args.concat(Array.prototype.slice.apply(arguments));
    // If all arguments are accounted for, invoke fn and return result.
    if (args.length >= argLength) {
      return fn.apply(null, args);
    }
    // If all arguments are not accounted for, return fn while maintaining access to parameters it has received so far.
    return curry.bind.apply(fn, (null, args));
  };
};

// The code below is for testing purposes.
var add = function(x, y, z) {
  return x + y + z;
};

var curryAdd = curry(add);
