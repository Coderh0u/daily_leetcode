class Solution {
    public int[] divisibilityArray(String word, int m) {
    int n = word.length();
    int[] div = new int[n];
    long x = 0;
    for (int i = 0; i < n; i++) {
      x = x * 10 + (word.charAt(i) - '0');
      if (x % m == 0) {
        div[i] = 1;
        x = 0;
      } else {
        x = x % m;
      }
    }
    return div;
  }
}