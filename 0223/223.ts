// 223. Rectangle Area

// Given the coordinates of two rectilinear rectangles in a 2D plane, return the total area covered by the two rectangles.

// The first rectangle is defined by its bottom-left corner (A, B) and its top-right corner (C, D).

// The second rectangle is defined by its bottom-left corner (E, F) and its top-right corner (G, H).


// Example 1:

// Rectangle Area
// Input: A = -3, B = 0, C = 3, D = 4, E = 0, F = -1, G = 9, H = 2
// Output: 45

// Example 2:

// Input: A = -2, B = -2, C = 2, D = 2, E = -2, F = -2, G = 2, H = 2
// Output: 16


// Constraints:

// -10^4 <= A, B, C, D, E, F, G, H <= 10^4

// Two rectangles do not overlap if one of the following conditions is true.
//   1) One rectangle is above top edge of other rectangle.
//   2) One rectangle is on left side of left edge of other rectangle.
function areOverlapping(A: number, B: number, C: number, D: number, E: number, F: number, G: number, H: number): boolean {
    // Check if either rectangle is actually a line
    if (A == C || B == D || E == G || F == H) { return false }

    if (A >= G || E >= C) { return false }

    if (D <= F || H <= B) { return false }

    return true
}

function getOverlap(A: number, B: number, C: number, D: number, E: number, F: number, G: number, H: number): [number, number, number, number] {
    return[ Math.max(A,E), Math.max(B,F), Math.min(C,G), Math.min(D,H)]
}

function rectArea(A: number, B: number, C: number, D: number): number {
    return Math.abs(C - A) * Math.abs(D - B)
}

// Cases to consider:
//
// 1: Rectangles do not overlap - total area is area(r1) + area(r2)
//
// 2: Rectangles partially overlap - total area is area(r1) + area(r2) - area(rOverlap)
//
// 3: One rectangle (r2) is completely inside the other (r1) - total area is area(r1) + area(r2) - area(r2) == area(r1)
function computeArea(A: number, B: number, C: number, D: number, E: number, F: number, G: number, H: number): number {
    const doRectsOverlap = areOverlapping(A, B, C, D, E, F, G, H)
    const areaSum = rectArea(A, B, C, D) + rectArea(E, F, G, H)

    if (!doRectsOverlap) {
        return areaSum
    }
    else {
        // Calculate overlap
        const [W, X, Y, Z] = getOverlap(A, B, C, D, E, F, G, H)
        return areaSum - rectArea(W, X, Y, Z)
    }
};

console.log(computeArea(-2, 0,  0, 2,  2, 0,  4, 2)) // Non-overlapping, 8
console.log(computeArea( 2, 0,  4, 2, -2, 0,  0, 2)) // Non-overlapping, 8
console.log(computeArea(-3, 0,  3, 4, 0,  -1, 9, 2)) // Partially overlapping, 45
console.log(computeArea(-2, -2, 2, 2, -2, -2, 2, 2)) // Completely overlapping, 16
