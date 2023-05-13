/**
 * Easy
 * Runtime: 68 ms beats 60.93%
 * Memory: 44.9 MB beats 84.58%
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
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function (root) {
  if (!root) return 0;

  let finalDepth = 0;

  const calculateDepth = function (root, depth) {
    if (!root) return 0;

    const left_depth = calculateDepth(root.left, depth + 1);
    const right_depth = calculateDepth(root.right, depth + 1);

    finalDepth = Math.max(left_depth, right_depth);

    return Math.max(left_depth, right_depth) + 1;
  };

  calculateDepth(root, 0);

  return finalDepth + 1;
};
