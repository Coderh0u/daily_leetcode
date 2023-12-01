/**
 * @param {number[]} nums
 * @return {number}
 */
var lengthOfLIS = function (nums) {
  const arr = new Map();
  for (let i = nums.length - 1; i >= 0; i--) {
    arr.set(i, 1);
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] < nums[j]) {
        arr.set(i, Math.max(arr.get(i), 1+ arr.get(j)));
      }
    }
  }
  const output = Math.max(...arr.values());
  return output;
};

