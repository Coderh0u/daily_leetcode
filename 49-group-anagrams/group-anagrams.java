class Solution {
    public List<List<String>> groupAnagrams(String[] strs) {
        
    Map<String, List<String>> anagrams = new HashMap<>();
    for (int i = 0; i < strs.length; i++) {
      char[] charsInWord = strs[i].toCharArray();
      Arrays.sort(charsInWord);
      String sortedWord = new String(charsInWord);
      anagrams.computeIfAbsent(sortedWord, k -> new ArrayList<>()).add(strs[i]);
    }
    return new ArrayList<>(anagrams.values());
    }
}