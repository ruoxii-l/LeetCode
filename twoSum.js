/**
 * Easy
 * Runtime: 115 ms beats 40.63%
 * Memory: 42.5 MB beats 60.20%
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    for (let i = 0; i < (nums.length - 1); i++) {
        for (let j = i + 1; j <= (nums.length - 1); j++) {
            let total = nums[i] + nums[j];
            if (total === target) {
                return [i, j];
            }
        }
    }
};

