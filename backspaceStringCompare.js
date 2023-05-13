/**
 * Easy
 * Runtime: 67 ms beats 29.99%
 * Memory: 44 MB beats 15.55%
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var backspaceCompare = function (s, t) {
  let length;
  let temp1 = "";
  let temp2 = "";

  if (s.length >= t.length) {
    length = s.length;
  } else {
    length = t.length;
  }

  for (i = 0; i < length; i++) {
    if (s[i]) {
      if (s[i] !== "#") {
        temp1 = temp1.concat(s[i]);
      } else {
        temp1 = temp1.slice(0, temp1.length - 1);
      }
    }

    if (t[i]) {
      if (t[i] !== "#") {
        temp2 = temp2.concat(t[i]);
      } else {
        temp2 = temp2.slice(0, temp2.length - 1);
      }
    }
  }

  if (temp1 === temp2) {
    return true;
  } else {
    return false;
  }
};
