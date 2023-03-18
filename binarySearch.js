/**
 * Easy
 * Runtime: 67 ms beats 62.17%
 * Memory: 45.1 MB beats 34.21%
 */

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
    let index = Math.floor(nums.length / 2)
    let temp = index
    let boundary = [0, nums.length - 1]

    if (nums.length <= 2) {
        if (nums[0] === target) {
            return 0
        } else if (nums[1] === target) {
            return 1
        } else {
            return -1
        }
    }

    while ((index >= boundary[0]) && (index <= boundary[1])) {
        if (nums[index] === target) {
            return index
        } else if (index === boundary[0] || index === boundary[1]) {
            return -1
        }
        else if (nums[index] < target) {
            temp = Math.floor(temp / 2)
            if (temp < 1) {
                temp = 1
            }
            boundary[0] = index
            index = index + temp

        } else if (nums[index] > target) {
            temp = Math.floor(temp / 2)
            if (temp < 1) {
                temp = 1
            }
            boundary[1] = index
            index = index - temp
        }
    }

    return -1
};