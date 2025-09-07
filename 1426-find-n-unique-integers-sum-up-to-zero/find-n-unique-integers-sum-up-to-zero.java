class Solution {
    public int[] sumZero(int n) {
    int[] out = new int[n];
    if (n == 1) {
      return new int[] { 0 };
    }
    int k = 1;
    for (int i = 0; i < n; i++) {
      out[i] = k;
      out[out.length - 1 - i] = -k;
      k++;
    }
    if (n % 2 == 1) {
      out[out.length / 2] = 0;
    }
    return out;
  }
}