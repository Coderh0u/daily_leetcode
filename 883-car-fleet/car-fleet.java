  class Solution {
  public int carFleet(int target, int[] position, int[] speed) {
    int fleet = 1;
    int[][] carStats = new int[position.length][2];
    for (int i = 0; i < position.length; i++) {
      carStats[i][0] = position[i];
      carStats[i][1] = speed[i];
    }
    Arrays.sort(carStats, (a, b) -> Integer.compare(b[0], a[0]));
    double time = (double) (target - carStats[0][0]) / carStats[0][1];
    for (int i = 0; i < carStats.length; i++) {
      if (time < (double) (target - carStats[i][0]) / carStats[i][1]) {
        System.out.println("if time " + time);
        fleet++;
        time = (double) (target - carStats[i][0]) / carStats[i][1];
      }
    }
    return fleet;
  }
  }