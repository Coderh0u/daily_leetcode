class Solution {
  public List<List<String>> groupAnagrams(String[] strs) {
    List<List<String>> output = new ArrayList<>();
    HashMap<String, List<String>> anagrams = new HashMap<String, List<String>>();
    for (int i = 0; i < strs.length; i++) {
      char[] charArray = strs[i].toCharArray();
      Arrays.sort(charArray);
      String sortedStr = new String(charArray);
      if (anagrams.containsKey(sortedStr)) {
        anagrams.get(sortedStr).add(strs[i]);
      } else {
        List<String> temp = new ArrayList<>();
        temp.add(strs[i]);
        anagrams.put(sortedStr, temp);
      }
    }
    for (String asd : anagrams.keySet()) {
      output.add(anagrams.get(asd));
    }
    return output;
  }
}