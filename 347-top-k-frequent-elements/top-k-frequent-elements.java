class Solution {
 public int[] topKFrequent(int[] nums, int k) {
    int[] output = new int[k];
    HashMap<Integer, Integer> numbers = new HashMap<Integer, Integer>();
    for (int i = 0; i < nums.length; i++) {
      numbers.put(nums[i], numbers.getOrDefault(nums[i], 0) + 1);
    }
    List<List<Integer>> bucket = new ArrayList<>();
    for (int i = 0; i < nums.length + 1; i++) {
      // nums.length + 1 because if nums = [1, 1, 1, 1, 1], frequency of 1s will be 5
      bucket.add(new ArrayList<>());
    }
    for (int key : numbers.keySet()) {
      bucket.get(numbers.get(key)).add(key);
    }
    int idx = 0;
    for (int i = bucket.size() - 1; i >= 0; i--) {
      if (bucket.get(i).size() > 0) {
        for (int num : bucket.get(i)) {
          output[idx] = num;
          idx++;
          if (idx == k) {
            break;
          }
        }
        if (idx == k) {
          break;
        }
      }
    }
    return output;
  }
}