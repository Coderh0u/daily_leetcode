function minStartValue(nums: number[]): number {
  if (!nums.filter((i) => i < 0).length) return 1;
  let sum = 0;
  let minSum = 0;
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i];
    if (sum < minSum) {
      minSum = sum;
    }
  }
  return minSum * -1 + 1;
}