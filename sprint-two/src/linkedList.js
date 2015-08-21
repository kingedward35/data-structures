var LinkedList = function(){
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value){
    var node = Node(value);
    if (list.tail) {
     list.tail.next = node;
    } else {
      list.head = node;
    }
    list.tail = node;
  };

  list.removeHead = function(){
    var result = list.head.value;
    var next = list.head.next;
    delete list.head;
    list.head = next;
    return result;
  };

  list.contains = function(target){
    var currentNode = list.head;
    while (currentNode !== null) {
      if (currentNode.value === target) {
        return true;
      }
      currentNode = currentNode.next;
    }
    return false;
  };

  return list;
};

var Node = function(value){
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */

// LinkedList: constant
// addToTail: constant
// removeHead: constant
// contains: linear
// Node: constant