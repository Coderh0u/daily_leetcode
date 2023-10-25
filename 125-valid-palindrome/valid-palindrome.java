class Solution {
    public boolean isPalindrome(String s) {
            char[] arr = s.toLowerCase().replaceAll("[^a-z0-9]", "").toCharArray();
    int left = 0;
    int right = arr.length - 1;
    while (left < right) {
      if (arr[left] != arr[right]) {
        return false;
      }
      left++;
      right--;
    }
    return true;
    }
}