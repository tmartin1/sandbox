// Create a stack object using psuedoclassical instantiation

var Stack = function() {
  this.storage = [];
  this.len = 0;
};

Stack.prototype.push = function(val) {
  this.storage[this.len] = val;
  this.len++;
};

Stack.prototype.pop = function() {
  return this.storage[--this.len];
};

Stack.prototype.size = function() {
  return this.len;
};
