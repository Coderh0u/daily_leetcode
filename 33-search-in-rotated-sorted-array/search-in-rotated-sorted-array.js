/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let minNum = nums[0];
  let minIdx = 0;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (nums[mid] <= minNum) {
      minNum = nums[mid];
      minIdx = mid;
    }
    if (nums[mid] >= nums[0]) {
      left = mid + 1;
    } else {
      right = mid - 1;
    }
  }

  if (target <= nums[minIdx - 1] && target >= nums[0]) {
    left = 0;
    right = minIdx - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target === nums[mid]) return mid;
      if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  } else {
    left = minIdx;
    right = nums.length - 1;
    while (left <= right) {
      const mid = Math.floor((left + right) / 2);
      if (target === nums[mid]) return mid;
      if (target < nums[mid]) {
        right = mid - 1;
      } else {
        left = mid + 1;
      }
    }
  }
  return -1;
};