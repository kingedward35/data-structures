var Tree = function(value){
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];
  return newTree;
};





var treeMethods = {};

treeMethods.addChild = function(value){
  this.children.push(Tree(value));
};

treeMethods.contains = function(target){
  if (this.value === target) {
    return true;
  } else if (this.children.length) {
    var output = _.reduce(this.children, function(result, child) {
      return result || child.contains(target);
    }, false);
    if (output) {
      return true;
    }
  }
  return false;
};


/*
 * Complexity: What is the time complexity of the above functions?
 */

// Tree: constant
// addChild: constant
// contains: linear