/**
 * @param {number[]} nums
 * @return {boolean}
 */
var isMonotonic = function (nums) {
  let interArr = [];
  for (let i = 0; i < nums.length -1; i++) {
    interArr.push(nums[i] - nums[i + 1]);
  }
  if (interArr.every((elem) => elem >= 0)) return true;
  if (interArr.every((elem) => elem <= 0)) return true;
  else return false;
};