var Queue = function(){
  var count = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    storage[count] = value;
    count++;
    return value;
  };

  someInstance.dequeue = function(){
    if (count) {
      count--;
    }
    return storage[count];
  };

  someInstance.size = function(){
    return count;
  };

  return someInstance;
};
