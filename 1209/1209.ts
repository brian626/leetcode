// 1209. Remove All Adjacent Duplicates in String II

// You are given a string s and an integer k, a k duplicate removal consists of choosing
// k adjacent and equal letters from s and removing them, causing the left and the right
// side of the deleted substring to concatenate together.

// We repeatedly make k duplicate removals on s until we no longer can.

// Return the final string after all such duplicate removals have been made. It is
// guaranteed that the answer is unique.


// Example 1:

// Input: s = "abcd", k = 2
// Output: "abcd"
// Explanation: There's nothing to delete.

// Example 2:

// Input: s = "deeedbbcccbdaa", k = 3
// Output: "aa"
// Explanation:
// First delete "eee" and "ccc", get "ddbbbdaa"
// Then delete "bbb", get "dddaa"
// Finally delete "ddd", get "aa"

// Example 3:

// Input: s = "pbbcggttciiippooaais", k = 2
// Output: "ps"


// Constraints:

// 1 <= s.length <= 10^5
// 2 <= k <= 10^4
// s only contains lower case English letters.

function checkForKDuplicates(s: string, k: number): boolean {
    for (let i = 0; i < k - 1; i++) {
        if (s[i] != s[i+1]) {
            return false
        }
    }

    return true
}

function removeDuplicates(s: string, k: number): string {
    if (s.length == 1) { return s }

    let i = 0
    while (i < s.length - k + 1) {
        if (checkForKDuplicates(s.slice(i, i + k), k)) {
            s = s.slice(0, i) + s.slice(i + k)
            i = (i > k) ? i - k : 0
        }
        else {
            i++
        }
    }

    return s
};

console.log(removeDuplicates("abcd", 2)) // Output: "abcd"
console.log(removeDuplicates("deeedbbcccbdaa", 3)) // Output: "aa"
console.log(removeDuplicates("pbbcggttciiippooaais", 2)) // Output: "ps"
