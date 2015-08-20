var Queue = function(){
  var someInstance = {};
  someInstance.storage = {};
  someInstance.count = 0;
  someInstance.start = 0;
  _.extend(someInstance, queueMethods);
  return someInstance;
};

var queueMethods = {};

queueMethods.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

queueMethods.dequeue = function() {
	var result = this.storage[this.start];
	delete this.storage[this.start];
	if(this.count - this.start) {
		this.start++;
	}
	return result;
};

queueMethods.size = function() {
	return this.count - this.start;
};