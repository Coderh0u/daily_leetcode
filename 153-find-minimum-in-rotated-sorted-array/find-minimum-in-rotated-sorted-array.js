/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;
  let ans = 0;

  while (left <= right) {
    let mid = Math.floor((left + right) / 2);
    if (nums[mid] > nums[mid + 1]) {
      ans = nums[mid + 1];
      break;
    } else {
      if (nums[mid] < nums[mid + 1] && nums[mid] > nums[left]) {
        left = mid;
      } else if (nums[mid] < nums[mid + 1] && nums[mid] < nums[left]) {
        right = mid;
      } else {
        ans = nums[0];
        break;
      }
    }
  }
  return ans;
};