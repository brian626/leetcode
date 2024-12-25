// 848. Shifting Letters

// We have a string s of lowercase letters, and an integer array shifts.

// Call the shift of a letter, the next letter in the alphabet, (wrapping around so that 'z' becomes 'a').

// For example, shift('a') = 'b', shift('t') = 'u', and shift('z') = 'a'.

// Now for each shifts[i] = x, we want to shift the first i+1 letters of S, x times.

// Return the final string after all such shifts to s are applied.

// Example 1:

// Input: s = "abc", shifts = [3,5,9]
// Output: "rpl"
// Explanation:
// We start with "abc".
// After shifting the first 1 letters of S by 3, we have "dbc".
// After shifting the first 2 letters of S by 5, we have "igc".
// After shifting the first 3 letters of S by 9, we have "rpl", the answer.

// Note:

// 1 <= s.length = shifts.length <= 20000
// 0 <= shifts[i] <= 10^9

function shiftingLetters(s: string, shifts: number[]): string {
    const charCodeA: number = 'a'.charCodeAt(0);
    let newString: string = '';
    let totalShifts: number = shifts.reduce((a,b) => a + b, 0) % 26;

    for (let i = 0; i < s.length; i++) {
        newString += String.fromCharCode(charCodeA + (s.charCodeAt(i) - charCodeA + totalShifts) % 26);
        totalShifts -= shifts[i] % 26;
        while (totalShifts < 0) {
            totalShifts += 26;
        }
    }

    return newString;
};

console.log(shiftingLetters("abc", [3,5,9])); // "rpl"

console.log(shiftingLetters("abcd", [3,5,9,10])); // "bzvn"

console.log(shiftingLetters("xrdofd", [70,41,71,72,73,84])); // "surjgj"
