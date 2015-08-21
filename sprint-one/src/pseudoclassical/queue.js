var Queue = function() {
  this.storage = {};
  this.count = 0;
  this.start = 0;
};

Queue.prototype.enqueue = function(value) {
	this.storage[this.count] = value;
	this.count++;
};

Queue.prototype.dequeue = function() {
	var result = this.storage[this.start];
	delete this.storage[this.start];
	if (this.count - this.start) {
		this.start++;
	}

	return result;
};

Queue.prototype.size = function() {
	return this.count - this.start;
};