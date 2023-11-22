function search(nums: number[], target: number): number {
  let left: number = 0;
  let right: number = nums.length - 1;
  while (left <= right) {
    let mid: number = Math.floor((left + right) / 2);
    if (target === nums[mid]) return mid;
    if (target < nums[mid]) {
      right = mid - 1;
    }
    if (target > nums[mid]) {
      left = mid + 1;
    }
  }

  return -1;
}
