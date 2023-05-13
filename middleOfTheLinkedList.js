/**
 * Easy
 * Runtime: 63 ms beats 27.32%
 * Memory: 42.3 MB beats 25.78%
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
var middleNode = function (head) {
  let counter = 0;
  let temp = new ListNode();
  temp = head;

  while (temp.next) {
    temp = temp.next;
    counter++;
  }

  counter = Math.ceil(counter / 2);

  for (i = 0; i < counter; i++) {
    head = head.next;
  }

  return head;
};
