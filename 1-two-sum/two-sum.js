/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
  let output = [];
  for (let i = 0; i < nums.length; i++) {
  
      const otherIdx = nums.indexOf(target - nums[i], i + 1);
      if (otherIdx >= 0) {
        output.push(i, otherIdx);
        return output;
      }
    
  }
};