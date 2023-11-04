class Solution {
  public List<String> generateParenthesis(int n) {
    List<String> res = new ArrayList<>();
    char[] output = new char[2 * n];
    generate(0, 0, 0, n, output, res);
    return res;
  }

  private void generate(int open, int close, int pos, int n, char[] output, List<String> res) {
    if (open == close && open == n) {
      res.add(new String(output));
      return;
    }
    if (open < n) {
      output[pos] = '(';
      generate(open + 1, close, pos + 1, n, output, res);
    }
    if (close < open) {
      output[pos] = ')';
      generate(open, close + 1, pos + 1, n, output, res);
    }
  }
}