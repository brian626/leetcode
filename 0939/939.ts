// 939. Minimum Area Rectangle

// Given a set of points in the xy-plane, determine the minimum area of a rectangle formed from
// these points, with sides parallel to the x and y axes.

// If there isn't any rectangle, return 0.


// Example 1:

// Input: [[1,1],[1,3],[3,1],[3,3],[2,2]]
// Output: 4

// Example 2:

// Input: [[1,1],[1,3],[3,1],[3,3],[4,1],[4,3]]
// Output: 2


// Note:

// 1 <= points.length <= 500
// 0 <= points[i][0] <= 40000
// 0 <= points[i][1] <= 40000
// All points are distinct.

// A subset of the points may be used to form the rectangle.
// 4 of the points must be used - one at each corner of the rectangle.


function rectArea(upperLeft: number[], lowerRight: number[]): number {
    return Math.abs((lowerRight[0] - upperLeft[0]) * (upperLeft[1] - lowerRight[1]));
}

function minAreaRect(points: number[][]): number {
    let upperLeft: number[] = [];
    let lowerRight: number[] = [];
    let minRectArea: number = 40000 * 40000 + 1;

    points.forEach(p => {
        if (p[0] < upperLeft[0] || p[1] > upperLeft[1]) {

        }
    })
};
