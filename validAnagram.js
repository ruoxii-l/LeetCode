/**
 * Easy
 * Runtime: 72 ms beats 91.44%
 * Memory: 44.1 MB beats 59.29%
 */

/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false

    let sArray = new Array(26).fill(0)
    let tArray = new Array(26).fill(0)
    let index

    const letterPosition = {
        'a': 0,
        'b': 1,
        'c': 2,
        'd': 3,
        'e': 4,
        'f': 5,
        'g': 6,
        'h': 7,
        'i': 8,
        'j': 9,
        'k': 10,
        'l': 11,
        'm': 12,
        'n': 13,
        'o': 14,
        'p': 15,
        'q': 16,
        'r': 17,
        's': 18,
        't': 19,
        'u': 20,
        'v': 21,
        'w': 22,
        'x': 23,
        'y': 24,
        'z': 25
    }

    for (letter of s) {
        index = letterPosition[letter]
        sArray[index]++
    }

    for (letter of t) {
        index = letterPosition[letter]
        tArray[index]++
    }

    if (sArray.toString() == tArray.toString()) {
        return true
    }

    return false
};