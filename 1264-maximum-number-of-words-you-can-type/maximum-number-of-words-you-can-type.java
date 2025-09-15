class Solution {
    public int canBeTypedWords(String text, String brokenLetters) {
    Set<Character> set = new HashSet<>();
    for (char c : brokenLetters.toCharArray()) {
      set.add(c);
    }
    int count = 0;
    String[] words = text.split(" ");
    for (int i = 0; i < words.length; i++) {
      boolean valid = true;
      for (int j = 0; j < words[i].length(); j++) {
        if (set.contains(words[i].charAt(j))) {
          valid = false;
          break;
        }
      }
      if (valid) {
        count++;
      }
    }
    return count;
  }
}