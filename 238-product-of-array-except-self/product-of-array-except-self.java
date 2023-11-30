class Solution {
    public int[] productExceptSelf(int[] nums) {
    int[] output = new int[nums.length];
    int multiplier = 1;
    for (int i = 0; i < nums.length; i++) {
      output[i] = multiplier;
      multiplier = multiplier * nums[i];
    }
    multiplier = 1;
    for (int i = nums.length - 1; i >= 0; i--) {
      output[i] = output[i] * multiplier;
      multiplier = multiplier * nums[i];
    }
    return output;
    }
}