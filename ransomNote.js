/**
 * Easy
 * Runtime: 82 ms beats 74.20%
 * Memory: 44.6 MB beats 74.79%
 */

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function (ransomNote, magazine) {
  if (ransomNote.length > magazine.length) return false;

  let note1 = new Array(26).fill(0);
  let maga = new Array(26).fill(0);
  let index;

  const letterPosition = {
    a: 0,
    b: 1,
    c: 2,
    d: 3,
    e: 4,
    f: 5,
    g: 6,
    h: 7,
    i: 8,
    j: 9,
    k: 10,
    l: 11,
    m: 12,
    n: 13,
    o: 14,
    p: 15,
    q: 16,
    r: 17,
    s: 18,
    t: 19,
    u: 20,
    v: 21,
    w: 22,
    x: 23,
    y: 24,
    z: 25,
  };

  for (letter of ransomNote) {
    note1[letterPosition[letter]]++;
  }

  for (letter of magazine) {
    maga[letterPosition[letter]]++;
  }

  for (i = 0; i < 26; i++) {
    if (note1[i] > maga[i]) {
      return false;
    }
  }

  return true;
};
