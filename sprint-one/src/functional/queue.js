var Queue = function(){
  var count = 0;
  var start = 0;
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};

  // Implement the methods below

  someInstance.enqueue = function(value){
    console.log(storage);
    storage[count] = value;
    count++;
    return value;
  };

  someInstance.dequeue = function(){
    console.log(storage);
    var result = storage[start];
    delete storage[start];
    if (count - start) {
      start++;
    }
    return result;
  };

  someInstance.size = function(){
    return count - start;
  };

  return someInstance;
};

var test = Queue();
console.log(test.enqueue('foo'));
// foo
console.log(test.size());
// 1
console.log(test.enqueue('bar'));
// bar
console.log(test.size());
// 2
console.log(test.dequeue());
// foo
console.log(test.size());
// 1
console.log(test.enqueue('arb'));
// arb
console.log(test.size());
// 2
console.log(test.dequeue());
// bar
console.log(test.size());
// 1


//{val: value, last: }
