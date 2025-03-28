// 844. Backspace String Compare

// Given two strings s and t, return true if they are equal when both are typed into empty text editors. '#' means a backspace character.

// Note that after backspacing an empty text, the text will continue empty.


// Example 1:

// Input: s = "ab#c", t = "ad#c"
// Output: true
// Explanation: Both s and t become "ac".

// Example 2:

// Input: s = "ab##", t = "c#d#"
// Output: true
// Explanation: Both s and t become "".

// Example 3:

// Input: s = "a##c", t = "#a#c"
// Output: true
// Explanation: Both s and t become "c".

// Example 4:

// Input: s = "a#c", t = "b"
// Output: false
// Explanation: s becomes "c" while t becomes "b".


// Constraints:

// 1 <= s.length, t.length <= 200
// s and t only contain lowercase letters and '#' characters.


// Follow up: Can you solve it in O(n) time and O(1) space?

function removeHashes(s: string): string {
    while (true) {
        const hashIndex: number = s.indexOf('#');
        if (hashIndex === -1)     { break; }
        else if (hashIndex === 0) { s = s.slice(1); }
        else                      { s = s.slice(0, hashIndex - 1) + s.slice(hashIndex + 1); }
    }

    return s;
}

function backspaceCompare(s: string, t: string): boolean {
    return removeHashes(s) === removeHashes(t);
};

console.log(backspaceCompare("ab#c", "ad#c")); // Output: true
console.log(backspaceCompare("ab##", "c#d#")); // Output: true
console.log(backspaceCompare("a##c", "#a#c")); // Output: true
console.log(backspaceCompare("a#c", "b")); // Output: false
