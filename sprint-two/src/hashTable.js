var HashTable = function(){
  this._limit = 8;
  this._storage = LimitedArray(this._limit);
};

HashTable.prototype.insert = function(k, v){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (!bucket) {
    this._storage.set(i, [[k, v]]);
  } else {
    var pair = _.find(bucket, function(pair) {
      return pair[0] === k;
    });
    if (pair) {
      pair[1] = v;
    } else {
      bucket.push([k, v]);
    }
  }
};

HashTable.prototype.retrieve = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  if (bucket) {
    var pair = _.find(bucket, function(pair) {
      return pair[0] === k;
    });
    return pair[1];
  }
};

HashTable.prototype.remove = function(k){
  var i = getIndexBelowMaxForKey(k, this._limit);
  var bucket = this._storage.get(i);
  var pair = _.find(bucket, function(pair) {
    return pair[0] === k;
  });
  pair[1] = null;
};



/*
 * Complexity: What is the time complexity of the above functions?
 */
