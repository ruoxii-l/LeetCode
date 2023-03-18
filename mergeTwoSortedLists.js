/**
 * Easy
 * Runtime: 73 ms beats 53.6%
 * Memory: 43.7 MB beats 86.89%
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function (list1, list2) {

    let headNode = new ListNode()
    let newNode = headNode

    let tempNode = new ListNode()
    let holdNode = new ListNode()

    while (list1 || list2) {

        if (!list1) {
            if (!holdNode.next) {
                holdNode = list2
            }
            newNode.next = holdNode

            return headNode.next
        }

        if (!list2) {
            if (!holdNode.next) {
                holdNode = list1
            }
            newNode.next = holdNode

            return headNode.next
        }

        if (list1.val <= list2.val) {
            tempNode = list1
            holdNode = list2
        } else {
            tempNode = list2
            holdNode = list1
        }

        newNode.next = new ListNode(tempNode.val)
        newNode = newNode.next

        if (tempNode === list1) {
            list1 = list1.next
        } else if (tempNode === list2) {
            list2 = list2.next
        }
    }

    return headNode.next
};