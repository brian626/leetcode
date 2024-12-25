// 567. Permutation in String

// Given two strings s1 and s2, return true if s2 contains a permutation of s1, or false otherwise.

// In other words, return true if one of s1's permutations is the substring of s2.


// Example 1:

// Input: s1 = "ab", s2 = "eidbaooo"
// Output: true
// Explanation: s2 contains one permutation of s1 ("ba").

// Example 2:

// Input: s1 = "ab", s2 = "eidboaoo"
// Output: false

// Constraints:

// 1 <= s1.length, s2.length <= 10^4
// s1 and s2 consist of lowercase English letters.

function compareMaps(map1, map2) {
    for (var [key, val] of map1) {
        const testVal = map2.get(key);
        // in cases of an undefined value, make sure the key
        // actually exists on the object so there are no false positives
        if (testVal !== val || (testVal === undefined && !map2.has(key))) {
            return false;
        }
    }

    return true;
}


function charFrequency(s: string): Map<string, number> {
    const freqMap: Map<string, number> = new Map<string, number>();

    s.split('').sort().forEach(l => {
        if (freqMap.has(l)) {
            freqMap.set(l, freqMap.get(l) + 1);
        } else {
            freqMap.set(l, 1);
        }
    });

    return freqMap;
}

function checkInclusion(s1: string, s2: string): boolean {
    if (s1.length > s2.length) { console.log('1'); return false; }

    const uniqueLettersInS1: string[] = s1.split('');
    uniqueLettersInS1.forEach(l => {
        if (!(s2.includes(l))) {
            return false;
        }
    });

    // Calculate character frequency of s1, then look at all
    // substrings of s2 with length equal to s1 and see if they
    // have the same frequency.
    const freqMap1 = charFrequency(s1);
    // console.log('map 1:');
    // console.log(freqMap1);
    let start = 0;
    let end = start + s1.length;
    while (end <= s2.length) {
        const freqMap2 = charFrequency(s2.slice(start, end));
        // console.log('map 2:');
        // console.log(freqMap2);
        if (compareMaps(freqMap1, freqMap2)) {
            return true;
        }

        start += 1;
        end += 1;
    }

    return false;
};


// console.log(checkInclusion("ab", "eidbaooo")); // true
// console.log(checkInclusion("ab", "eidboaoo")); // false
console.log(checkInclusion("adc", "dcda")); // true
