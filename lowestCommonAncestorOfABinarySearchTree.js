/**
 * Easy
 * Runtime: 86 ms beats 61.16%
 * Memory: 51.9 MB beats 60.22%
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {

    let tempNode = root
    let i = false

    while (!i) {
        if ((p.val < tempNode.val) && (q.val < tempNode.val)) {
            tempNode = tempNode.left
        } else if ((p.val > tempNode.val) && (q.val > tempNode.val)) {
            tempNode = tempNode.right
        } else {
            i = true
        }
    }

    return tempNode
};