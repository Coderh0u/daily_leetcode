class Solution {
    public boolean isAnagram(String s, String t) {
    char[] sArr = s.toCharArray();
    char[] tArr = t.toCharArray();
    if (sArr.length != tArr.length)
      return false;

    HashMap<Character, Integer> letters = new HashMap<Character, Integer>();
    for (int i = 0; i < sArr.length; i++) {
      letters.put(sArr[i], letters.getOrDefault(sArr[i], 0) + 1);
    }

    for (int i = 0; i < tArr.length; i++) {
      letters.put(tArr[i], letters.getOrDefault(tArr[i], 0) - 1);
    }
    for (int count : letters.values()) {
      if (count != 0) {
        return false;
      }
    }
    return true; 
    }
}