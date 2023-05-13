/**
 * Easy
 * Runtime: 64 ms beats 72.69%
 * Memory: 42.7 MB beats 93.47%
 */

/**
 * @param {string} s
 * @return {number}
 */
var longestPalindrome = function (s) {
  let stringCounter = new Array(58).fill(0);
  let temp = 0;
  let length = 0;
  let oddBoolean = false;

  for (i = 0; i < s.length; i++) {
    stringCounter[s.charCodeAt(i) - 65]++;
  }

  for (i = 0; i < stringCounter.length; i++) {
    if (stringCounter[i] === 0) {
      length;
    } else {
      if (stringCounter[i] % 2 === 0) {
        //even
        temp = stringCounter[i];
      } else {
        temp = stringCounter[i] - 1; //odd
        oddBoolean = true;
      }
      length = length + temp;
    }
  }

  if (oddBoolean === true) {
    length = length + 1;
  }

  return length;
};
