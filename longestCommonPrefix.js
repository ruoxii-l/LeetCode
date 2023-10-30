/**
 * Easy
 * Runtime: 68 ms beats 6.93%
 * Memory: 44 MB beats 13.52%
 */

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function (strs) {
  if (strs.length === 1) {
    return strs[0];
  }

  let carry = strs[0];
  let ans = "";

  for (i = 0; i < strs.length - 1; i++) {
    for (j = 0; j < Math.min(carry.length, strs[i + 1].length); j++) {
      if (carry[j] === strs[i + 1][j]) {
        ans = ans + carry[j];
      } else {
        break;
      }
    }

    if (i === strs.length - 2) {
      break;
    }

    carry = ans;
    ans = "";
  }

  return ans;
};
