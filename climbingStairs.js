/**
 * Easy
 * Runtime: 59 ms beats 47.21%
 * Memory: 41.8 MB beats 61%
 */

/**
 * @param {number} n
 * @return {number}
 */
var climbStairs = function (n) {
  function factorial(num) {
    if (num === 0) {
      return 1;
    }
    let finalNum = 1;
    for (i = num; i > 0; i--) {
      finalNum = finalNum * i;
    }
    return finalNum;
  }

  let nSpot = n;
  let rSpot = n; //spot for 1
  let sSpot = 0; //spot for 2
  let totalWays = 0;
  let eachRound;

  for (nSpot; rSpot >= 0; nSpot--) {
    eachRound = factorial(nSpot) / (factorial(rSpot) * factorial(sSpot));

    totalWays = totalWays + eachRound;

    rSpot = rSpot - 2;
    sSpot = sSpot + 1;
  }

  return totalWays;
};
