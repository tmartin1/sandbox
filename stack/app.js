// Create a stack object using psuedoclassical instantiation

var Stack = function() {
  this.storage = [];
  this.len = 0;
};

Stack.prototype.push = function(val) {
  this.storage.push(val);
  this.len++;
};

Stack.prototype.pop = function() {
  this.len--;
  return this.storage.pop();
};

Stack.prototype.size = function() {
  return this.len;
};
