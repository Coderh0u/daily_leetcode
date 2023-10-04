class Solution {
    public int minStartValue(int[] nums) {
 if (allPositive(nums)) {
      return 1;
    }
    int sum = 0;
    int minSum = 0;
    for (int i = 0; i < nums.length; i++) {
      sum += nums[i];
      minSum = Math.min(minSum, sum);
    }
    return minSum * -1 + 1;

    }
    private boolean allPositive(int[] nums) {
    for (int i = 0; i < nums.length; i++) {
      if (nums[i] < 0) {
        return false;
      }
    }
    return true;
  }
}