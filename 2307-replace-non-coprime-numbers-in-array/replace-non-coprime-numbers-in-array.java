class Solution {
    public List<Integer> replaceNonCoprimes(int[] nums) {
    Stack<Long> stack = new Stack<>();
    List<Integer> ls = new LinkedList<>();
    for (long num : nums) {
      stack.add(num);
      while (stack.size() > 1) {
        long num1 = stack.pop();
        long num2 = stack.pop();
        long num3 = gcd(num1, num2);
        if (num3 > 1) {
          stack.add((num1 * num2) / num3);
        } else {
          stack.add(num2);
          stack.add(num1);
          break;
        }
      }
    }
    while (!stack.isEmpty()) {
      ls.addFirst(stack.pop().intValue());
    }
    return ls;
  }

    public long gcd(long num1, long num2) {
        if (num2 > num1) {
            long temp = num1;
            num1 = num2;
            num2 = temp;
        }
        if (num1 % num2 == 0) {
            return num2;
        }
        return gcd(num2, num1 % num2);
    }
}