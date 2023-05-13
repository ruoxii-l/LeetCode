/**
 * Easy
 * Runtime: 55 ms beats 98.39%
 * Memory: 45.8 MB beats 53.41%
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
var diameterOfBinaryTree = function (root) {
  let temp = 0;
  let diameter = 0;

  const calculateDiameter = (root, height) => {
    if (!root) {
      return 0;
    }

    const left_height = calculateDiameter(root.left, height + 1);
    const right_height = calculateDiameter(root.right, height + 1);

    temp = left_height + right_height;

    if (temp > diameter) {
      diameter = temp;
    }

    return Math.max(left_height, right_height) + 1;
  };

  calculateDiameter(root, 0);

  return diameter;
};
