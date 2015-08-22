var BinarySearchTree = function(value){
  var tree = {};
  tree.value = value;
  _.extend(tree, binarySearchTreeMethods);
  return tree;
};

binarySearchTreeMethods = {};

binarySearchTreeMethods.insert = function(value) {
  if (value < this.value) {
    this.left ? this.left.insert(value) : this.left = BinarySearchTree(value);
  }
  else if (value > this.value) {
    this.right ? this.right.insert(value) : this.right = BinarySearchTree(value);
  }
};

binarySearchTreeMethods.contains = function(value) {
  if (this.value === value) {
    return true;
  }
  if (value < this.value && this.left) {
    if (this.left.contains(value)) {
      return true;
    }
  }
  if (value > this.value && this.right) {
    if (this.right.contains(value)) {
      return true;
    }
  }
  return false;
};

binarySearchTreeMethods.depthFirstLog = function(fn) {
  fn(this.value);
  this.left && this.left.depthFirstLog(fn);
  this.right && this.right.depthFirstLog(fn);
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// BinarySearchTree: constant
// insert: logarithmic
// contains: logarithmic
// depthFirstLog: linear