class Solution {
    public int[] twoSum(int[] nums, int target) {
    HashMap<Integer, Integer> numIdx = new HashMap<Integer, Integer>();
    int[] output = new int[2];
    for (int i = 0; i < nums.length; i++) {
      if (numIdx.containsKey(target - nums[i])) {
        output[1] = i;
        output[0] = numIdx.get(target - nums[i]);
      } else {
        numIdx.put(nums[i], i);
      }
    }
    return output;
    }
}