/**
 * Easy
 * Runtime: 71 ms beats 30.35%
 * Memory: 43 MB beats 62.6%
 */

/**
 * @param {string} a
 * @param {string} b
 * @return {string}
 */
var addBinary = function (a, b) {
  let temp = "";
  let extra = "0";
  let final = "";

  i = a.length - 1;
  j = b.length - 1;

  while (i >= 0 || j >= 0) {
    let aTemp = a[i];
    let bTemp = b[j];

    if (!a[i]) {
      aTemp = "0";
    } else if (!b[j]) {
      bTemp = "0";
    }

    if (extra === "0" && aTemp === "1" && bTemp === "1") {
      temp = "0";
      extra = "1";
    } else if (extra === "1" && aTemp === "1" && bTemp === "1") {
      temp = "1";
      extra = "1";
    } else if (extra === "1" && (aTemp === "1" || bTemp === "1")) {
      temp = "0";
      extra = "1";
    } else {
      temp = `${parseInt(aTemp) + parseInt(bTemp) + parseInt(extra)}`;
      extra = "0";
    }

    final = temp + final;
    i--;
    j--;
  }

  if (extra === "1") {
    final = extra + final;
  }

  return final;
};
