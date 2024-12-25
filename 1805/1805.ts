// 1805. Number of Different Integers in a String

// You are given a string word that consists of digits and lowercase English letters.

// You will replace every non-digit character with a space. For example, "a123bc34d8ef34"
// will become " 123  34 8  34". Notice that you are left with some integers that are separated
// by at least one space: "123", "34", "8", and "34".

// Return the number of different integers after performing the replacement operations on word.

// Two integers are considered different if their decimal representations without any leading zeros are different.


// Example 1:

// Input: word = "a123bc34d8ef34"
// Output: 3
// Explanation: The three different integers are "123", "34", and "8". Notice that "34" is only counted once.

// Example 2:

// Input: word = "leet1234code234"
// Output: 2

// Example 3:

// Input: word = "a1b01c001"
// Output: 1
// Explanation: The three integers "1", "01", and "001" all represent the same integer because
// the leading zeros are ignored when comparing their decimal values.


// Constraints:

// 1 <= word.length <= 1000
// word consists of digits and lowercase English letters.

function numDifferentIntegers(word: string): number {
    let numberStrings: string[] = word.replace(/[a-z]/g, " ").split(" ").map(s => s.trim())
    let nums = new Set()
    numberStrings.forEach(s => {
        if (s.length > 0) {
            nums.add(s.replace(/^0*/, ""))
        }
    })

    return nums.size
};

console.log(numDifferentIntegers("a123bc34d8ef34")) // Output: 3
console.log(numDifferentIntegers("leet1234code234")) // Output: 2
console.log(numDifferentIntegers("a1b01c001")) // Output: 1
console.log(numDifferentIntegers("2393706880236110407059624696967828762752651982730115221690437821508229419410771541532394006597463715513741725852432559057224478815116557380260390432211227579663571046845842281704281749571110076974264971989893607137140456254346955633455446057823738757323149856858154529105301197388177242583658641529908583934918768953462557716z97438020429952944646288084173334701047574188936201324845149110176716130267041674438237608038734431519439828191344238609567530399189316846359766256507371240530620697102864238792350289978450509162697068948604722646739174590530336510475061521094503850598453536706982695212493902968251702853203929616930291257062173c79487281900662343830648295410")) // Output: 3
