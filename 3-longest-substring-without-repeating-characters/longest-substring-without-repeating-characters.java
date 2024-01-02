class Solution {
    public int lengthOfLongestSubstring(String s) {
    char[] sArr = s.toCharArray();
    if (sArr.length == 0) {
      return 0;
    }
    int l = 0;
    int r = 1;
    int maxCount = 1;
    Set<Character> seenChar = new HashSet<>();
    seenChar.add(sArr[l]);
    while (r < sArr.length) {
      if (!seenChar.contains(sArr[r])) {
        seenChar.add(sArr[r]);
        maxCount = Math.max(maxCount, seenChar.size());
        r++;
      } else {
        while (seenChar.contains(sArr[r])) {
          seenChar.remove(sArr[l]);
          l++;
        }
        seenChar.add(sArr[r]);
        r++;
      }
    }
    return maxCount;
    }
}