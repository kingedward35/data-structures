

// ###Graph Solution

// Instantiate a new graph
var Graph = function(){
  this.nodes = [];
  this.edges = [];
};

// ------------------------
// Add a node to the graph, passing in the node's value.
Graph.prototype.addNode = function(node){
  this.nodes.push(node);
};

// ------------------------
// Return a boolean value indicating if the value passed to contains is represented in the graph.
Graph.prototype.contains = function(node){
  return _.contains(this.nodes, node);
};

// ------------------------
// Removes a node from the graph.
Graph.prototype.removeNode = function(node){
  return this.nodes.splice(_.indexOf(node), 1);
};

// ------------------------
// Returns a boolean indicating whether two specified nodes are connected.  Pass in the values contained in each of the two nodes.
Graph.prototype.hasEdge = function(fromNode, toNode){
  return _.some(this.edges, function(edge) {
    return _.contains(edge, fromNode) && _.contains(edge, toNode);
  });
};

// ------------------------
// Connects two nodes in a graph by adding an edge between them.
Graph.prototype.addEdge = function(fromNode, toNode){
  this.edges.push([fromNode, toNode]);
};

// ------------------------
// Remove an edge between any two specified (by value) nodes.
Graph.prototype.removeEdge = function(fromNode, toNode){
  var index = _.findIndex(this.edges, function(edge) {
    return _.contains(edge, fromNode) && _.contains(edge, toNode);
  });
  return this.edges.splice(index, 1);
};

// ------------------------
// Pass in a callback which will be executed on each node of the graph.
Graph.prototype.forEachNode = function(cb){
  _.each(this.nodes, cb);
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// Graph: constant
// addNode: constant
// contains: linear
// removeNode: linear
// hasEdge: linear
// addEdge: constant
// removeEdge: linear
// forEachNode: linear