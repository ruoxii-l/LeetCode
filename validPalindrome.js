/**
 * Easy
 * Runtime: 76 ms beats 64.48%
 * Memory: 44.4 MB beats 74.88%
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
    const regexPattern = /[^A-Za-z0-9]/g
    let newStr = s.replace(regexPattern, '').toLowerCase()

    let j = newStr.length - 1
    let output = false

    if (newStr.length === 0) {
        return true
    }

    for (i = 0; i <= j; i++) {
        if (newStr[i] === newStr[j]) {
            output = true
            j--
        } else {
            return false
        }
    }

    return output
};