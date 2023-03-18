/**
 * Easy
 * Runtime: 61 ms beats 98.87%
 * Memory: 45.2 MB beats 28.63%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
    if (!head) return false

    while (head.next) {
        head.val = null
        if (head.next.val === null) {
            return true
        }
        head = head.next
    }

    return false
};