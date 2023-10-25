class Solution {
    public int longestConsecutive(int[] nums) {
          if (nums.length == 0) {
      return 0;
    }
    Set<Integer> set1 = new HashSet<>();
    for (int i = 0; i < nums.length; i++) {
      set1.add(nums[i]);
    }
    int maxCount = 0;
    for (int i = 0; i < nums.length; i++) {
      int start;
      int seqLength = 0;
      if (!set1.contains(nums[i] - 1)) {
        start = nums[i];
        while (set1.contains(start)) {
          start++;
          seqLength++;
        }
      }
      maxCount = Math.max(maxCount, seqLength);
    }
    return maxCount;
    }
}