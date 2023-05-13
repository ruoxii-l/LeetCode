/**
 * Easy
 * Runtime: 57 ms beats 87.53%
 * Memory: 44.7 MB beats 26.10%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function (head) {
  if (!head || !head.next) {
    return head;
  }

  let tempPrev = new ListNode();
  let tempNode = new ListNode();
  let tempNext = new ListNode();

  tempPrev = head;
  tempNode = tempPrev.next;
  tempPrev.next = null;
  tempNext = tempNode.next;

  while (tempNode) {
    tempNode.next = tempPrev;

    tempPrev = tempNode;
    tempNode = tempNext;
    if (tempNode) {
      tempNext = tempNode.next;
    }
  }

  return tempPrev;
};
