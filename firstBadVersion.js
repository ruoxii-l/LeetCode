/**
 * Easy
 * Runtime: 4438 ms beats 10.80%
 * Memory: 41.2 MB beats 93.98%
 */

/**
 * Definition for isBadVersion()
 *
 * @param {integer} version number
 * @return {boolean} whether the version is bad
 * isBadVersion = function(version) {
 *     ...
 * };
 */

/**
 * @param {function} isBadVersion()
 * @return {function}
 */
var solution = function (isBadVersion) {
  /**
   * @param {integer} n Total versions
   * @return {integer} The first bad version
   */
  return function (n) {
    if (isBadVersion(1)) {
      return 1;
    }

    let badVersion = Math.round(n / 2);

    while (isBadVersion(badVersion)) {
      badVersion = badVersion - 1;
      if (!isBadVersion(badVersion)) {
        return badVersion + 1;
      }
    }
    while (!isBadVersion(badVersion)) {
      badVersion = badVersion + 1;
      if (isBadVersion(badVersion)) {
        return badVersion;
      }
    }
  };
};
