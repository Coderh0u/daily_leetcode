class Solution {
    public int[] twoSum(int[] numbers, int target) {
         int left = 0;
    int right = numbers.length - 1;
    while (numbers[left] + numbers[right] != target) {
      if (numbers[left] + numbers[right] > target) {
        right--;
      }
      if (numbers[left] + numbers[right] < target) {
        left++;
      }
    }
    int[] output = { left + 1, right + 1 };
    return output;
    }
}