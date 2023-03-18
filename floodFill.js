/**
 * Easy
 * Runtime: 71 ms beats 79.47%
 * Memory: 44.2 MB beats 48.51%
 */

/**
 * @param {number[][]} image
 * @param {number} sr
 * @param {number} sc
 * @param {number} color
 * @return {number[][]}
 */
var floodFill = function (image, sr, sc, color) {
    const initialColor = image[sr][sc]

    image[sr][sc] = color

    if (sr < 0 || sc < 0 || initialColor === color) return image

    //left
    if ((sc - 1) >= 0) {
        if (image[sr][sc - 1] === initialColor) {
            floodFill(image, sr, sc - 1, color)
        }
    }

    //right
    if (image[sr][sc + 1] || image[sr][sc + 1] === 0) {
        if (image[sr][sc + 1] === initialColor) {
            floodFill(image, sr, sc + 1, color)
        }
    }

    //top
    if (sr - 1 >= 0) {
        if (image[sr - 1][sc] === initialColor) {
            floodFill(image, sr - 1, sc, color)
        }
    }

    //bottom
    if (image[sr + 1]) {
        if (image[sr + 1][sc] === initialColor) {
            floodFill(image, sr + 1, sc, color)
        }
    }

    return image
};