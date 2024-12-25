// 1037. Valid Boomerang

// Given an array points where points[i] = [xi, yi] represents a point on the X-Y plane, return true if these points are a boomerang.

// A boomerang is a set of three points that are all distinct and not in a straight line.


// Example 1:

// Input: points = [[1,1],[2,3],[3,2]]
// Output: true

// Example 2:

// Input: points = [[1,1],[2,2],[3,3]]
// Output: false


// Constraints:

// points.length == 3
// points[i].length == 2
// 0 <= xi, yi <= 100

function pointsEqual(p1: number[], p2: number[]): boolean {
    return p1[0] === p2[0] && p1[1] === p2[1]
}

function isBoomerang(points: number[][]): boolean {
    if (pointsEqual(points[0], points[1]) || pointsEqual(points[0], points[2]) || pointsEqual(points[1], points[2])) {
        return false
    }

    const rise1: number = points[0][1] - points[1][1]
    const run1: number  = points[0][0] - points[1][0]
    const rise2: number = points[1][1] - points[2][1]
    const run2: number  = points[1][0] - points[2][0]

    if (run1 == 0 && run2 == 0) { return false }

    return (rise1 / run1) !== (rise2 / run2)
};

console.log(isBoomerang([[1,1],[2,3],[3,2]])) // Output: true
console.log(isBoomerang([[1,1],[2,2],[3,3]])) // Output: false
console.log(isBoomerang([[1,1],[6,4],[11,7]])) // Output: false
console.log(isBoomerang([[1,1],[6,4],[11,7]])) // Output: false
console.log(isBoomerang([[0,0],[1,1],[1,1]])) // Output: false
console.log(isBoomerang([[73,31],[73,19],[73,45]])) // Output: false
console.log(isBoomerang([[73,31],[19,31],[45,31]])) // Output: false
