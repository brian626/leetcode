const DEBUG: boolean = false
function log(s: string): void {
    if (DEBUG) {
        console.log(s)
    }
}

function maxArea(height: number[]): number {
    // Start with a horizontal line at height h == (max a). Find its intersecting vertical lines
    // and calculate the product.
    // Repeat until h = 1 or maxArea is greater than h*n

    const n = height.length
    let h = Math.max(...height)
    let maxArea = 0

    while (h > 0) {
        log(`testing h = ${h}`)
        let firstIntersect = -1
        let lastIntersect = -1
        for (let i = 0; i < height.length; i++) {
            if (h <= height[i]) {
                if (firstIntersect == -1) {
                    log(`found first intersect at ${i}`)
                    firstIntersect = i
                }
                else
                {
                    log(`found next intersect at ${i}`)
                    lastIntersect = i
                }
            }
        }

        let area = h * (lastIntersect - firstIntersect)
        log(`area is ${area}`)
        if (area > maxArea) {
            maxArea = area
        }

        h -= 1
        log("")

        if (maxArea > n * h) {
            break
        }
    }

    return maxArea
};

// console.log(`${maxArea([1,8,6,2,5,4,8,3,7])} should be 49`)
// console.log(`${maxArea([1,1])} should be 1`)
// console.log(`${maxArea([4,3,2,1,4])} should be 16`)
// console.log(`${maxArea([1,2,1])} should be 2`)
