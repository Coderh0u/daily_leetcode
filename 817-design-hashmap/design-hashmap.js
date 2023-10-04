var MyHashMap = function () {
  size = this.size;
  this.buckets = new Array(this.size);
};

MyHashMap.prototype.put = function (key, value) {
  for (let i = 0; i < this.buckets.length; i++) {
    if (this.buckets[i] && this.buckets[i][0] === key) {
      this.buckets[i][1] = value; // update value in key, value pair
      return;
    }
  }
  if (!this.size) {
    this.size = 0;
  }
  this.size++;
  if (!this.buckets[0]) {
    this.buckets[0] = [key, value];
  } else {
    this.buckets.push([key, value]); // else insert new key-value pair
  }
};

MyHashMap.prototype.get = function (key) {
  for (let i = 0; i < this.buckets.length; i++) {
    if (this.buckets[i] && this.buckets[i][0] === key) {
      return this.buckets[i][1];
    }
  }
  return -1;
};

MyHashMap.prototype.remove = function (key) {
  for (let i = 0; i < this.buckets.length; i++) {
    if (this.buckets[i] && this.buckets[i][0] === key) {
      this.buckets.splice(i, 1);
      this.size--;
      return;
    }
  }
};