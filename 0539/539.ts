// 539. Minimum Time Difference

// Given a list of 24-hour clock time points in "HH:MM" format, return the minimum
// minutes difference between any two time-points in the list.


// Example 1:

// Input: timePoints = ["23:59","00:00"]
// Output: 1

// Example 2:

// Input: timePoints = ["00:00","23:59","00:00"]
// Output: 0


// Constraints:

// 2 <= timePoints <= 2 * 10^4
// timePoints[i] is in the format "HH:MM".

// Example: 02:45 and 04:30
//   If they are in the same day, the answer is 270 - 165 = 105
//   Otherwise, the answer is (270 + 24*60 - 165) = 1545

// Example: 22:08 and 00:35
//    If they are in the same day, the answer is 1328 - 35 = 1293
//    Otherwise, the answer is (24*60 - 1328) + 35 = 147

function timeDelta(time1: string, time2: string): number {
    if (time1 === time2) { return 0 }

    const [h1, m1] = time1.split(":").map(x => parseInt(x, 10))
    const [h2, m2] = time2.split(":").map(x => parseInt(x, 10))
    const t1 = h1 * 60 + m1
    const t2 = h2 * 60 + m2

    const sameDayDelta = Math.max(t1, t2) - Math.min(t1, t2)
    const crossDayDelta = (24*60 - Math.max(t1, t2)) + Math.min(t1, t2)

    return Math.min(sameDayDelta, crossDayDelta)
}

function findMinDifference(timePoints: string[]): number {
    let minDifference = 60 * 24 + 1

    for (let i = 0; i < timePoints.length; i++) {
        for (let j = i + 1; j < timePoints.length; j++) {
            minDifference = Math.min(minDifference, timeDelta(timePoints[i], timePoints[j]))
            if (minDifference == 0) { return 0 }
        }
    }

    return minDifference
};

console.log(findMinDifference(["23:59","00:00"])) // Output: 1
console.log(findMinDifference(["00:00","23:59","00:00"])) // Output: 0
console.log(findMinDifference(["05:31","22:08","00:35"])) // Output: 147
