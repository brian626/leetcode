// 1736. Latest Time by Replacing Hidden Digits

// You are given a string time in the form of hh:mm, where some of the digits in the string are hidden (represented by ?).

// The valid times are those inclusively between 00:00 and 23:59.

// Return the latest valid time you can get from time by replacing the hidden digits.


// Example 1:

// Input: time = "2?:?0"
// Output: "23:50"
// Explanation: The latest hour beginning with the digit '2' is 23 and the latest minute ending with the digit '0' is 50.

// Example 2:

// Input: time = "0?:3?"
// Output: "09:39"

// Example 3:

// Input: time = "1?:22"
// Output: "19:22"


// Constraints:

// time is in the format hh:mm.
// It is guaranteed that you can produce a valid time from the given string.

function maximumTime(time: string): string {
    let newHourTens = time[0], newHourOnes = time[1], newMinuteTens = time[3], newMinuteOnes = time[4]

    if (time[0] == "?") {
        switch(time[1]) {
            case "0":
            case "1":
            case "2":
            case "3":
            case "?":
                newHourTens = "2"
                break

            case "4":
            case "5":
            case "6":
            case "7":
            case "8":
            case "9":
                newHourTens = "1"
                break
        }
    }

    if (time[1] == "?") {
        switch(time[0]) {
            case "0":
            case "1":
                newHourOnes = "9"
                break

            case "2":
            case "?":
                newHourOnes = "3"
                break
        }
    }

    if (time[3] == "?") { newMinuteTens = "5" }

    if (time[4] == "?") { newMinuteOnes = "9" }

    return [newHourTens, newHourOnes, ":", newMinuteTens, newMinuteOnes].join("")
};

console.log(maximumTime("2?:?0")) // Output: "23:50"
console.log(maximumTime("0?:3?")) // Output: "09:39"
console.log(maximumTime("1?:22")) // Output: "19:22"
