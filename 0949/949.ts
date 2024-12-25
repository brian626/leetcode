// 949. Largest Time for Given Digits

// Given an array arr of 4 digits, find the latest 24-hour time that can be made using each digit exactly once.

// 24-hour times are formatted as "HH:MM", where HH is between 00 and 23, and MM is between 00 and 59.
// The earliest 24-hour time is 00:00, and the latest is 23:59.

// Return the latest 24-hour time in "HH:MM" format.  If no valid time can be made, return an empty string.


// Example 1:

// Input: arr = [1,2,3,4]
// Output: "23:41"
// Explanation: The valid 24-hour times are "12:34", "12:43", "13:24", "13:42", "14:23", "14:32", "21:34", "21:43", "23:14", and "23:41". Of these times, "23:41" is the latest.

// Example 2:

// Input: arr = [5,5,5,5]
// Output: ""
// Explanation: There are no valid 24-hour times as "55:55" is not valid.

// Example 3:

// Input: arr = [0,0,0,0]
// Output: "00:00"

// Example 4:

// Input: arr = [0,0,1,0]
// Output: "10:00"


// Constraints:

// arr.length == 4
// 0 <= arr[i] <= 9

// Digit 1: 0, 1, or 2
// Digit 2: 0 => [0-9], 1 => [0-9], 2 => [0-3]
// Digit 3: 0 through 5
// Digit 4: 0 through 9
function isValidTime(h1: number, h2: number, h3: number, h4: number): number {
    if (h1 < 0 || h1 > 2)              { return -1 }
    if (h1 == 0 && (h2 < 0 || h2 > 9)) { return -1 }
    if (h1 == 1 && (h2 < 0 || h2 > 9)) { return -1 }
    if (h1 == 2 && (h2 < 0 || h2 > 3)) { return -1 }
    if (h3 < 0 || h3 > 5)              { return -1 }
    if (h4 < 0 || h4 > 9)              { return -1 }

    return (h1 * 600) + (h2 * 60) + (h3 * 10) + h4
}

function largestTimeFromDigits(arr: number[]): string {
    let latestTime = -1
    let latestTimeString = ""

    for (let a = 0; a < 4; a++) {
        for (let b = 0; b < 4; b++) {
            if (b == a) { continue }
            for (let c = 0; c < 4; c++) {
                if ((c == a) || (c == b)) { continue }
                for (let d = 0; d < 4; d++) {
                    if ((d == a) || (d == b) || (d == c)) { continue }

                    const time = isValidTime(arr[a], arr[b], arr[c], arr[d])
                    if (time > latestTime) {
                        latestTime = time
                        latestTimeString = `${arr[a]}${arr[b]}:${arr[c]}${arr[d]}`
                    }
                }
            }
        }
    }

    return latestTimeString
};

console.log(largestTimeFromDigits([1,2,3,4])) // Output: 23:41
console.log(largestTimeFromDigits([5,5,5,5])) // Output: ""
console.log(largestTimeFromDigits([0,0,0,0])) // Output: "00:00"
console.log(largestTimeFromDigits([0,0,1,0])) // Output: "10:00"
