// Definition for singly-linked list.
function ListNode(val) {
  this.val = val;
  this.next = null;
}

/**
 * https://leetcode.com/problems/add-two-number/
 * You are given two non-empty linked lists representing two non-negative
 * integers. The digits are stored in reverse order and each of their nodes
 * contain a single digit. Add the two numbers and return it as a linked list.
 * You may assume the two numbers do not contain any leading zero, except the
 * number 0 itself.
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
  let out;
  let outTail;
  let overflow = 0;
  while (l1 !== null || l2 !== null || overflow !== 0) {
    let tempSum = overflow + ((l1) ? l1.val : 0) + ((l2) ? l2.val : 0);
    let newDigit = tempSum % 10;
    overflow = (tempSum - newDigit) / 10
    if (!out) {
      out = new ListNode(newDigit);
      outTail = out;
    } else {
      outTail.next = new ListNode(newDigit);
      outTail = outTail.next;
    }
    if (l1) l1 = l1.next;
    if (l2) l2 = l2.next;
  }
  return out;
};

