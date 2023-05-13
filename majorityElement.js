/**
 * Easy
 * Runtime: 60 ms beats 87.96%
 * Memory: 44.2 MB beats 49.38%
 */

/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function (nums) {
  const limit = Math.ceil(nums.length / 2);

  const map = new Map();

  for (i = 0; i < nums.length; i++) {
    if (map.get(nums[i])) {
      let newValue = map.get(nums[i]) + 1;
      map.set(nums[i], newValue);
    } else {
      map.set(nums[i], 1);
    }
  }

  let num;

  for ([key, value] of map) {
    if (value >= limit) {
      num = key;
      break;
    }
  }

  return num;
};
