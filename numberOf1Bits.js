/**
 * Easy
 * Runtime: 73 ms beats 19.44%
 * Memory: 42.3 MB beats 66.64%
 */

/**
 * @param {number} n - a positive integer
 * @return {number}
 */
var hammingWeight = function (n) {
  let arr = n.toString(2).split("");
  let ans = 0;
  let i = 0;

  while (i < arr.length) {
    if (arr[i] === "1") {
      ans++;
    }
    i++;
  }

  return ans;
};
