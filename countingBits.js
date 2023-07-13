/**
 * Easy
 * Runtime: 161 ms beats 6.18%
 * Memory: 50.7 MB beats 32.83%
 */

/**
 * @param {number} n
 * @return {number[]}
 */
var countBits = function (n) {
  let final = [0];
  let i = 1;
  let j = 1;
  let temp = 0;

  const count = (i, j, n) => {
    while (i <= n) {
      if (j === 1 || j === 2) {
        if (final[i]) {
          final[i]++;
        } else {
          final[i] = 1;
        }
        i++;
        j = i;
      } else if (Number.isInteger(Math.log2(j))) {
        if (final[i]) {
          final[i]++;
        } else {
          final[i] = 1;
        }
        i++;
        j++;
      } else {
        temp = Math.floor(Math.log2(j));
        temp = Math.pow(2, temp);
        if (final[i]) {
          final[i]++;
        } else {
          final[i] = 1;
        }
        j = j - temp;
        count(i, j, i);
        i++;
        j = i;
      }
    }
  };

  count(i, j, n);

  return final;
};
