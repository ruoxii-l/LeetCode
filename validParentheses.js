/**
 * Easy
 * Runtime: 45 ms beats 99.83%
 * Memory: 43.3 MB beats 17.49%
 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {

    let finalResult = true;
    let temp = '';

    for (i = 0; i <= s.length - 1; i++) {
        if (s[i] === '(') {
            temp = temp + '1';
        } else if (s[i] === ')') {
            if (temp[temp.length - 1] === '1') {
                temp = temp.slice(0, temp.length - 1)
            } else {
                return finalResult = false;
            }
        } else if (s[i] === '[') {
            temp = temp + '3'
        } else if (s[i] === ']') {
            if (temp[temp.length - 1] === '3') {
                temp = temp.slice(0, temp.length - 1)
            } else {
                return finalResult = false;
            }
        } else if (s[i] === '{') {
            temp = temp + '5'
        } else if (s[i] === '}') {
            if (temp[temp.length - 1] === '5') {
                temp = temp.slice(0, temp.length - 1)
            } else {
                return finalResult = false;
            }
        }
    }

    if (temp) {
        return finalResult = false;
    }

    return finalResult;
};