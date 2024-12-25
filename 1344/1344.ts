// 1344. Angle Between Hands of a Clock

// Given two numbers, hour and minutes. Return the smaller angle (in degrees) formed between the hour and the minute hand.


// Example 1:

// Input: hour = 12, minutes = 30
// Output: 165

// Example 2:

// Input: hour = 3, minutes = 30
// Output: 75

// Example 3:

// Input: hour = 3, minutes = 15
// Output: 7.5

// Example 4:

// Input: hour = 4, minutes = 50
// Output: 155

// Example 5:

// Input: hour = 12, minutes = 0
// Output: 0


// Constraints:

// 1 <= hour <= 12
// 0 <= minutes <= 59
// Answers within 10^-5 of the actual value will be accepted as correct.

// The minute handle will be between 0 and 360 degrees, calculated as (minutes / 60) * 360.
//
// The hour hand will be between (hour * 30) and ((hour + 1) * 30) degrees. The offset
// is calculated as (minutes / 60) * 30.
//
function angleClock(hour: number, minutes: number): number {
    const minuteHandAngle: number = (minutes / 60) * 360
    const hourHandAngle: number = ((hour === 12 ? 0 : hour) * 30) + ((minutes / 60) * 30)

    const angle = Math.abs(minuteHandAngle - hourHandAngle)
    const complementaryAngle = 360 - angle

    return Math.min(angle, complementaryAngle)
};

// console.log(angleClock(12, 30)) // Output: 165
// console.log(angleClock(3, 30)) // Output: 75
// console.log(angleClock(3, 15)) // Output: 7.5
// console.log(angleClock(4, 50)) // Output: 155
// console.log(angleClock(12, 0)) // Output: 0
console.log(angleClock(1, 57)) // Output: 76.5
