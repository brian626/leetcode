// 1268. Search Suggestions System

// Given an array of strings products and a string searchWord. We want to design a system
// that suggests at most three product names from products after each character of searchWord
// is typed. Suggested products should have common prefix with the searchWord. If there are more
// than three products with a common prefix return the three lexicographically minimums products.

// Return list of lists of the suggested products after each character of searchWord is typed.


// Example 1:

// Input: products = ["mobile","mouse","moneypot","monitor","mousepad"], searchWord = "mouse"
// Output: [
// ["mobile","moneypot","monitor"],
// ["mobile","moneypot","monitor"],
// ["mouse","mousepad"],
// ["mouse","mousepad"],
// ["mouse","mousepad"]
// ]
// Explanation: products sorted lexicographically = ["mobile","moneypot","monitor","mouse","mousepad"]
// After typing m and mo all products match and we show user ["mobile","moneypot","monitor"]
// After typing mou, mous and mouse the system suggests ["mouse","mousepad"]

// Example 2:

// Input: products = ["havana"], searchWord = "havana"
// Output: [["havana"],["havana"],["havana"],["havana"],["havana"],["havana"]]

// Example 3:

// Input: products = ["bags","baggage","banner","box","cloths"], searchWord = "bags"
// Output: [["baggage","bags","banner"],["baggage","bags","banner"],["baggage","bags"],["bags"]]

// Example 4:

// Input: products = ["havana"], searchWord = "tatiana"
// Output: [[],[],[],[],[],[],[]]


// Constraints:

// 1 <= products.length <= 1000
// There are no repeated elements in products.
// 1 <= Σ products[i].length <= 2 * 10^4
// All characters of products[i] are lower-case English letters.
// 1 <= searchWord.length <= 1000
// All characters of searchWord are lower-case English letters.

function searchProducts(products: string[], searchTerm: string): string[] {
    let results: string[] = []

    for (let i = 0; i < products.length; i++) {
        const product = products[i]
        if (product.slice(0, searchTerm.length) === searchTerm) {
            results.push(product)
        }

        if (results.length == 3) {
            break
        }
    }

    return results
}

function suggestedProducts(products: string[], searchWord: string): string[][] {
    const searchLetters: string[] = searchWord.split("")
    const suggestions: string[][] = []
    products.sort()

    for (let i = 1; i <= searchLetters.length; i++) {
        suggestions.push(searchProducts(products, searchWord.slice(0,i)))
    }

    return suggestions
};

// console.log(suggestedProducts(["mobile","mouse","moneypot","monitor","mousepad"], "mouse"))
// Output: [
//     ["mobile","moneypot","monitor"],
//     ["mobile","moneypot","monitor"],
//     ["mouse","mousepad"],
//     ["mouse","mousepad"],
//     ["mouse","mousepad"]
// ]

// console.log(suggestedProducts(["havana"], "havana"))
// Output: [
//     ["havana"],
//     ["havana"],
//     ["havana"],
//     ["havana"],
//     ["havana"],
//     ["havana"]
// ]

// console.log(suggestedProducts(["bags","baggage","banner","box","cloths"], "bags"))
// Output: [
//     ["baggage","bags","banner"],
//     ["baggage","bags","banner"],
//     ["baggage","bags"],
//     ["bags"]
// ]

console.log(suggestedProducts(["havana"], "tatiana"))
// Output: [
//     [],
//     [],
//     [],
//     [],
//     [],
//     [],
//     []
// ]
