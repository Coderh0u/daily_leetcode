class Solution {
    public int maxFreqSum(String s){
    Map<Character, Integer> alphabets = new HashMap<>();
    Map<Character, Integer> vowels = new HashMap<>();
    vowels.put('a', 0);
    vowels.put('e', 0);
    vowels.put('i', 0);
    vowels.put('o', 0);
    vowels.put('u', 0);
    int maxCon = 0;
    int maxVow = 0;
    for (char c : s.toCharArray()) {
      if (vowels.containsKey(c)) {
        vowels.put(c, vowels.get(c) + 1);
        maxVow = Math.max(maxVow, vowels.get(c));
      } else {
        alphabets.put(c, alphabets.getOrDefault(c, 0) + 1);
        maxCon = Math.max(maxCon, alphabets.get(c));
      }
    }
    return maxCon + maxVow;
  }
}