/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
      const intCounts = new Object();
  for (let i = 0; i < nums.length; i++) {
    if (intCounts[nums[i]]) {
      intCounts[nums[i]]++;
    } else {
      intCounts[nums[i]] = 1;
    }
  }

  const frequency = new Map();
  for (let i = 1; i < nums.length + 1; i++) {
    frequency.set(i, []);
  }

  for (let i = 0; i < Object.values(intCounts).length; i++) {
    if (frequency.has(Object.values(intCounts)[i])) {
      frequency
        .get(Object.values(intCounts)[i])
        .push(Object.keys(intCounts)[i]);
    }
  }
  const simplifiedFreq = new Map();
  for (let [key, value] of frequency) {
    if (value.length > 0) {
      simplifiedFreq.set(key, value);
    }
  }
  console.log(simplifiedFreq);
  const arr = Array.from(simplifiedFreq.values()).flat();
  const output = [];
  for (let i = 0; i < k; i++) {
    output.push(parseInt(arr.pop()));
  }
  return output;
};