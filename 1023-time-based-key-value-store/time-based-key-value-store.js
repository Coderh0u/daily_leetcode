class TimeMap {
  constructor() {
    this.data = {};
  }
}

/**
 * @param {string} key
 * @param {string} value
 * @param {number} timestamp
 * @return {void}
 */
TimeMap.prototype.set = function (key, value, timestamp) {
  if (!this.data[key]) {
    this.data[key] = [];
  }
  this.data[key].push([value, timestamp]);
};

/**
 * @param {string} key
 * @param {number} timestamp
 * @return {string}
 */
TimeMap.prototype.get = function (key, timestamp) {
  if (!this.data[key]) return "";

  const values = this.data[key];

  let left = 0;
  let right = values.length - 1;
  let res = "";

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    // console.log("test: " + values);
    if (values[mid][1] <= timestamp) {
      res = values[mid][0];
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  return res;
};

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */