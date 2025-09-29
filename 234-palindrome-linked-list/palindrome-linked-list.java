/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode() {}
 *     ListNode(int val) { this.val = val; }
 *     ListNode(int val, ListNode next) { this.val = val; this.next = next; }
 * }
 */
class Solution {
    public boolean isPalindrome(ListNode head) {
    ListNode slow = head;
    ListNode fast = head;
    ListNode temp = head;
    int length = 0;
    Stack<Integer> stk = new Stack<>();
    while (fast.next != null && fast.next.next != null) {
      slow = slow.next;
      fast = fast.next.next;
    }
    while (temp != null) {
      length++;
      temp = temp.next;
    }
    fast = head;
    for (int i = 0; i < length / 2; i++) {
      stk.push(fast.val);
      fast = fast.next;
    }
      slow = slow.next;
    while (slow != null) {
      int curr = stk.pop();
      if (curr != slow.val) {
        return false;
      }
      slow = slow.next;
    }
    return true;
  }
}