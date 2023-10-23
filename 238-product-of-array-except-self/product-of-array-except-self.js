/**
 * @param {number[]} nums
 * @return {number[]}
 */
const productExceptSelf = function (nums) {
  const output = new Array(nums.length).fill(1);
  let pre = 1;
  let post = 1;
  for (let i = 0; i < nums.length; i++) {
    output[i] = pre;
    pre = pre * nums[i];
  }
  for (let i = nums.length - 1; i >= 0; i--) {
    output[i] = output[i] * post;
    post = post * nums[i];
    console.log(post);
  }
  return output;
};