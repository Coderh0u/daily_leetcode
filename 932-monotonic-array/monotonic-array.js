/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let increasing = false;
  let decreasing = false;
  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] < nums[i + 1]) {
      increasing = true;
    }
    if (nums[i] > nums[i + 1]) {
      decreasing = true;
    }
  }
  if (increasing && decreasing) {
    return false;
  } else {
    return true;
  }
};