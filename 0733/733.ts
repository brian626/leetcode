// 733. Flood Fill

// An image is represented by a 2-D array of integers, each integer representing the pixel
// value of the image (from 0 to 65535).

// Given a coordinate (sr, sc) representing the starting pixel (row and column) of the flood
// fill, and a pixel value newColor, "flood fill" the image.

// To perform a "flood fill", consider the starting pixel, plus any pixels connected
// 4-directionally to the starting pixel of the same color as the starting pixel, plus
// any pixels connected 4-directionally to those pixels (also with the same color as the
// starting pixel), and so on. Replace the color of all of the aforementioned pixels with the newColor.

// At the end, return the modified image.

// Example 1:
// Input:
// image = [[1,1,1],[1,1,0],[1,0,1]]
// sr = 1, sc = 1, newColor = 2
// Output: [[2,2,2],[2,2,0],[2,0,1]]
// Explanation:
// From the center of the image (with position (sr, sc) = (1, 1)), all pixels connected
// by a path of the same color as the starting pixel are colored with the new color.
// Note the bottom corner is not colored 2, because it is not 4-directionally connected
// to the starting pixel.

// Note:

// The length of image and image[0] will be in the range [1, 50].
// The given starting pixel will satisfy 0 <= sr < image.length and 0 <= sc < image[0].length.
// The value of each color in image[i][j] and newColor will be an integer in [0, 65535].

function doFloodFill(image: number[][], r: number, c: number, startingColor: number): void {
    if (r > 0) {
        if (image[r-1][c] === startingColor) {
            image[r-1][c] = -1
            doFloodFill(image, r - 1, c, startingColor)
        }
    }

    if (c > 0) {
        if (image[r][c-1] === startingColor) {
            image[r][c-1] = -1
            doFloodFill(image, r, c - 1, startingColor)
        }
    }

    if (r < image.length - 1) {
        if (image[r+1][c] === startingColor) {
            image[r+1][c] = -1
            doFloodFill(image, r + 1, c, startingColor)
        }
    }

    if (c < image[0].length - 1) {
        if (image[r][c+1] === startingColor) {
            image[r][c+1] = -1
            doFloodFill(image, r, c + 1, startingColor)
        }
    }
}

function floodFill(image: number[][], sr: number, sc: number, newColor: number): number[][] {
    const startingPixelColor = image[sr][sc]
    image[sr][sc] = -1

    doFloodFill(image, sr, sc, startingPixelColor)

    // Now flip all the -1's to the new color.
    for (let r = 0; r < image.length; r++) {
        for (let c = 0; c < image[0].length; c++) {
            if (image[r][c] === -1) {
                image[r][c] = newColor
            }
        }
    }

    return image
};

// console.log(floodFill([[1,1,1],[1,1,0],[1,0,1]], 1, 1, 2))
// Output: [[2,2,2],[2,2,0],[2,0,1]]

console.log(floodFill([[0,0,0],[0,1,1]], 1, 1, 1))
// Output: [[0,0,0],[0,1,1]]
