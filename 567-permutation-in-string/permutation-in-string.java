class Solution {
    public boolean checkInclusion(String s1, String s2) {
    int[] s1Chars = new int[26];
    int[] s2Chars = new int[26];

    for (int i = 0; i < s1.length(); i++) {
      s1Chars[s1.charAt(i) - 'a']++;
    }

    int left = 0;
    int right = left + s1.length();
    while (right < s2.length() + 1) {
      Arrays.fill(s2Chars, 0);
      for (int i = left; i < right; i++) {
        s2Chars[s2.charAt(i) - 'a']++;
      }

      boolean matches = true;
      for (int j = 0; j < 26; j++) {
        if (s1Chars[j] != s2Chars[j]) {
          matches = false;
        }
      }
      if (matches) {
        return true;
      }

      left++;
      right++;
    }
    return false;
    }
}