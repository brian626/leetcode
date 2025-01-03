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
