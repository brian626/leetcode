// 692. Top K Frequent Words

// Given a non-empty list of words, return the k most frequent elements.

// Your answer should be sorted by frequency from highest to lowest. If two words
// have the same frequency, then the word with the lower alphabetical order comes first.

// Example 1:
// Input: ["i", "love", "leetcode", "i", "love", "coding"], k = 2
// Output: ["i", "love"]
// Explanation: "i" and "love" are the two most frequent words.
//     Note that "i" comes before "love" due to a lower alphabetical order.

// Example 2:
// Input: ["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], k = 4
// Output: ["the", "is", "sunny", "day"]
// Explanation: "the", "is", "sunny" and "day" are the four most frequent words,
//     with the number of occurrence being 4, 3, 2 and 1 respectively.

// Note:
// You may assume k is always valid, 1 ≤ k ≤ number of unique elements.
// Input words contain only lowercase letters.

// Follow up:
// Try to solve it in O(n log k) time and O(n) extra space.

function topKFrequent(words: string[], k: number): string[] {
    // Build frequency map
    let freqMap: Map<string, number> = new Map()
    words.forEach(w => {
        if (freqMap.has(w)) {
            freqMap.set(w, freqMap.get(w) + 1)
        }
        else {
            freqMap.set(w, 1)
        }
    })

    // Sort by decreasing value frequency and increasing key alphabetical order
    const sortedMap = new Map([...freqMap].sort((a, b) => {
        if (a[1] != b[1]) {
            return b[1] - a[1]
        }
        else {
            return String(a[0]).localeCompare(b[0])
        }
    }))

    sortedMap.forEach((value, key) => {
        console.log(`key: ${key}, value: ${value}`)
    })

    return Array.from(sortedMap.keys()).slice(0, k)
};

console.log(topKFrequent(["i", "love", "leetcode", "i", "love", "coding"], 2))
// Output: ["i", "love"]

console.log(topKFrequent(["the", "day", "is", "sunny", "the", "the", "the", "sunny", "is", "is"], 4))
// Output: ["the", "is", "sunny", "day"]
