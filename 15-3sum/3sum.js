var threeSum = function (numbers) {
  const nums = numbers.sort((a, b) => a - b);
  const output = [];
  for (let i = 0; i < nums.length - 2; i++) {
    if (i === 0 || (i > 0 && nums[i] != nums[i - 1])) {
      let left = i + 1;
      let right = nums.length - 1;

      while (left < right) {
        const sum = nums[i] + nums[left] + nums[right];

        if (sum === 0) {
          output.push([nums[i], nums[left], nums[right]]);
          while (left < right && nums[left] === nums[left + 1]) {
            left++;
          }
          while (left < right && nums[right] === nums[right - 1]) {
            right--;
          }
          left++;
          right--;
        }
        if (sum < 0) {
          left++;
        }
        if (sum > 0) {
          right--;
        }
      }
    }
  }

  return output;
};
