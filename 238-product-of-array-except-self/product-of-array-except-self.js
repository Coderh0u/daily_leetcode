/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = (nums) => {
  const output = new Array(nums.length);
  output.fill(1);

  let multiplier = 1;
  // prefix multiplication
  for (let i = 0; i < nums.length; i++) {
    output[i] = multiplier;
    multiplier *= nums[i];
  }
 
  multiplier = 1;
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] *= multiplier;
    multiplier *= nums[i];
  }
  return output;
};