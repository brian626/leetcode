// 1779. Find Nearest Point That Has the Same X or Y Coordinate

// You are given two integers, x and y, which represent your current location on a Cartesian grid: (x, y).
// You are also given an array points where each points[i] = [ai, bi] represents that a point exists at (ai, bi).
// A point is valid if it shares the same x-coordinate or the same y-coordinate as your location.

// Return the index (0-indexed) of the valid point with the smallest Manhattan distance from your current location.
// If there are multiple, return the valid point with the smallest index. If there are no valid points, return -1.

// The Manhattan distance between two points (x1, y1) and (x2, y2) is abs(x1 - x2) + abs(y1 - y2).


// Example 1:

// Input: x = 3, y = 4, points = [[1,2],[3,1],[2,4],[2,3],[4,4]]
// Output: 2
// Explanation: Of all the points, only [3,1], [2,4] and [4,4] are valid. Of the valid points,
// [2,4] and [4,4] have the smallest Manhattan distance from your current location, with a
// distance of 1. [2,4] has the smallest index, so return 2.

// Example 2:

// Input: x = 3, y = 4, points = [[3,4]]
// Output: 0
// Explanation: The answer is allowed to be on the same location as your current location.

// Example 3:

// Input: x = 3, y = 4, points = [[2,3]]
// Output: -1
// Explanation: There are no valid points.


// Constraints:

// 1 <= points.length <= 10&4
// points[i].length == 2
// 1 <= x, y, ai, bi <= 10^4

function nearestValidPoint(x: number, y: number, points: number[][]): number {
    const validPoints = points.filter(p => { if (p[0] == x || p[1] == y) { return p } })

    if (validPoints.length == 0)      { return -1 }
    else if (validPoints.length == 1) {
        return points.indexOf(validPoints[0])
    }
    else {
        let minDistance = 999999999
        let nearestPoint: number[] = []

        validPoints.forEach(p => {
            const distance = Math.abs(x - p[0]) + Math.abs(y - p[1])

            if (distance < minDistance) {
                minDistance = distance
                nearestPoint = p
            }
        })

        return points.indexOf(nearestPoint)
    }
};

// console.log(nearestValidPoint(3, 4, [[1,2],[3,1],[2,4],[2,3],[4,4]])) // Output: 2
// console.log(nearestValidPoint(3, 4, [[3,4]])) // Output: 0
// console.log(nearestValidPoint(3, 4, [[2,3]])) // Output: -1
console.log(nearestValidPoint(28, 51, [[25,45],[60,19],[11,38],[32,22],[1,24],[26,25],[52,36],[45,54],[45,30],[45,39],[39,38],[25,38],[39,57],[47,51],[47,49],[37,21],[16,43],[53,33],[10,50],[30,29],[3,31],[45,26],[22,40],[2,31],[57,42],[25,42],[37,13],[13,54],[17,5],[50,32]])) // Output: 13

// let a =
// [
//     [25,45],
//     [60,19],
//     [11,38],
//     [32,22],
//     [1,24],
//     [26,25],
//     [52,36],
//     [45,54],
//     [45,30],
//     [45,39],
//     [39,38],
//     [25,38],
//     [39,57],
//     [47,51],
//     [47,49],
//     [37,21],
//     [16,43],
//     [53,33],
//     [10,50],
//     [30,29],
//     [3,31],
//     [45,26],
//     [22,40],
//     [2,31],
//     [57,42],
//     [25,42],
//     [37,13],
//     [13,54],
//     [17,5],
//     [50,32]
// ]
