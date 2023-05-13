/**
 * Easy
 * Runtime: 124 ms beats 76.37%
 * Memory: 47.8 MB beats 42.79%
 */

/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  const romanToInt = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  let temp = 0;
  let sum = 0;

  for (i = 0; i < s.length; i++) {
    if (romanToInt[s[i]] < romanToInt[s[i + 1]]) {
      temp = romanToInt[s[i + 1]] - romanToInt[s[i]];
      i++;
    } else {
      temp = romanToInt[s[i]];
    }

    sum = sum + temp;
  }

  return sum;
};
