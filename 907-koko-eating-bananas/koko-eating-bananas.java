class Solution {
  public int minEatingSpeed(int[] piles, int h) {
    int maxPile = Arrays.stream(piles).max().orElse(0);
    int k = -1;
    int left = 1;
    int right = maxPile;
    while (left <= right) {
      int mid = (right + left) / 2;

      int totalTime = 0;
      for (int i = 0; i < piles.length; i++) {
        totalTime += Math.ceil((double) piles[i] / mid);
      }
      System.out.println(Integer.toString(mid) + "---" + Integer.toString(totalTime));
      if (totalTime > h) {
        left = mid + 1;
      } else if (totalTime <= h) {
        k = mid;
        right = mid - 1;
      }
    }
    return k;
  }
} 