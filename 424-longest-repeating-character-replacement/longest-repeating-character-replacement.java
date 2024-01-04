class Solution {
    public int characterReplacement(String s, int k) {
    int[] arr = new int[26];
    int result = 0;
    int max = 0;
    int l = 0;
    for (int r = 0; r < s.length(); r++) {
      arr[s.charAt(r) - 'A']++;
      max = Math.max(max, arr[s.charAt(r) - 'A']);
      if (r - l + 1 - max > k) {
        arr[s.charAt(l) - 'A']--;
        l++;
      }
      result = Math.max(result, r - l+1);
    }
    return result;
    }
}