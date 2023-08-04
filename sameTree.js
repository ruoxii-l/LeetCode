/**
 * Easy
 * Runtime: 56 ms beats 72.52%
 * Memory: 42.7 MB beats 11.3%
 */

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  if ((!p && q) || (!q && p)) {
    return false;
  }

  if (p && q) {
    if (p.val !== q.val) {
      return false;
    }
  }

  if (!p || !q) {
    return true;
  }

  const leftResult = isSameTree(p.left, q.left);
  if (!leftResult) return false;

  const rightResult = isSameTree(p.right, q.right);
  if (!rightResult) return false;

  return true;
};
