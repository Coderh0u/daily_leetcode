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
    public ListNode removeNthFromEnd(ListNode head, int n) {
    int len = 0;
    ListNode start = head;
    while (start != null) {
      len++;
      start = start.next;
    }
    start = head;
    if (len == n) {
      ListNode dummy = new ListNode(0);
      ListNode node2 = start.next;
      dummy.next = node2;
      return dummy.next;
    }
    ListNode del = new ListNode();
    for (int i = 1; i < len - n; i++) {
      start = start.next;
    }
    del = start.next;

    if (del.next == null) {
      start.next = null;
    } else {
      start.next = del.next;
    }
    return head;
  }
}