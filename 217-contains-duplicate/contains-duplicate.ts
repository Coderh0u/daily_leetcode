function containsDuplicate(nums: number[]): boolean {
  const seen = new Set();
  for (let i = 0; i < nums.length; i++) {
    if (seen.has(nums[i])) {
      return true;
    } else {
      seen.add(nums[i]);
    }
  }
  return false;
};