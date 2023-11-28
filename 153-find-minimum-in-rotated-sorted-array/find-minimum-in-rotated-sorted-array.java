class Solution {
    public int findMin(int[] nums) {
          int left = 0;
    int right = nums.length - 1;
    int ans = nums[0];
    while (left <= right) {
      int mid = (left + right) / 2;
      if (nums[mid] >= nums[0]) {
        ans = Math.min(ans, nums[mid]);
        left = mid + 1;
      } else {
        ans = Math.min(ans, nums[mid]);
        right = mid - 1;
      }
    }
    return ans; 
    }
}