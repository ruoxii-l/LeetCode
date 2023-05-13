/**
 * Easy
 * Runtime: 89 ms beats 75.5%
 * Memory: 57.5 MB beats 11.75%
 */

/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const map = new Map();
  let b = false;

  for (i = 0; i <= nums.length; i++) {
    if (!map.get(nums[i])) {
      map.set(nums[i], true);
    } else {
      b = true;
    }
  }
  return b;
};
