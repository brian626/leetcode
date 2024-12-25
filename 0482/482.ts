// 482. License Key Formatting

// You are given a license key represented as a string s that consists of only
// alphanumeric characters and dashes. The string is separated into n + 1 groups
// by n dashes. You are also given an integer k.

// We want to reformat the string s such that each group contains exactly k characters,
// except for the first group, which could be shorter than k but still must contain at
// least one character. Furthermore, there must be a dash inserted between two groups,
// and you should convert all lowercase letters to uppercase.

// Return the reformatted license key.


// Example 1:

// Input: s = "5F3Z-2e-9-w", k = 4
// Output: "5F3Z-2E9W"
// Explanation: The string s has been split into two parts, each part has 4 characters.
// Note that the two extra dashes are not needed and can be removed.

// Example 2:

// Input: s = "2-5g-3-J", k = 2
// Output: "2-5G-3J"
// Explanation: The string s has been split into three parts, each part has 2 characters
// except the first part as it could be shorter as mentioned above.


// Constraints:

// 1 <= s.length <= 10^5
// s consists of English letters, digits, and dashes '-'.
// 1 <= k <= 10^4

function licenseKeyFormatting(s: string, k: number): string {
    let fullStr = s.replace(/\-/g, "").toUpperCase().split("").reverse()
    let groups: string[] = []

    for (let i = 0; i < fullStr.length; i += k) {
        groups.push( fullStr.slice(i, i + k).reverse().join("") )
    }

    return groups.reverse().join("-")
};

// console.log(licenseKeyFormatting("2-5g-3-J", 2)) // Output: "2-5G-3J"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 8)) // Output: "5F3Z2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 7)) // Output: "5-F3Z2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 6)) // Output: "5F-3Z2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 5)) // Output: "5F3-Z2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 4)) // Output: "5F3Z-2E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 3)) // Output: "5F-3Z2-E9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 2)) // Output: "5F-3Z-2E-9W"
console.log(licenseKeyFormatting("5F3Z-2e-9-w", 1)) // Output: "5-F-3-Z-2-E-9-W"
