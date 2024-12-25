// 1276. Number of Burgers with No Waste of Ingredients

// Given two integers tomatoSlices and cheeseSlices. The ingredients of different burgers are as follows:

// Jumbo Burger: 4 tomato slices and 1 cheese slice.
// Small Burger: 2 Tomato slices and 1 cheese slice.

// Return [total_jumbo, total_small] so that the number of remaining tomatoSlices equal to 0 and
// the number of remaining cheeseSlices equal to 0. If it is not possible to make the remaining
// tomatoSlices and cheeseSlices equal to 0 return [].


// Example 1:

// Input: tomatoSlices = 16, cheeseSlices = 7
// Output: [1,6]
// Explantion: To make one jumbo burger and 6 small burgers we need 4*1 + 2*6 = 16 tomato
// and 1 + 6 = 7 cheese. There will be no remaining ingredients.

// Example 2:

// Input: tomatoSlices = 17, cheeseSlices = 4
// Output: []
// Explantion: There will be no way to use all ingredients to make small and jumbo burgers.

// Example 3:

// Input: tomatoSlices = 4, cheeseSlices = 17
// Output: []
// Explantion: Making 1 jumbo burger there will be 16 cheese remaining and making 2 small burgers there will be 15 cheese remaining.

// Example 4:

// Input: tomatoSlices = 0, cheeseSlices = 0
// Output: [0,0]

// Example 5:

// Input: tomatoSlices = 2, cheeseSlices = 1
// Output: [0,1]


// Constraints:

// 0 <= tomatoSlices <= 10^7
// 0 <= cheeseSlices <= 10^7

// 4j + 2s = tomato
//  j +  s = cheese   =>   2j + 2s = 2 * cheese
// Therefore, j = (tomato - 2 * cheese) / 2
//
// 4j + 2s = tomato
//  j +  s = cheese   =>   4j + 4s = 4 * cheese
// Therefore, s = (4 * cheese - tomato) / 2
//
function numOfBurgers(tomatoSlices: number, cheeseSlices: number): number[] {
    if (tomatoSlices % 2 != 0) { return [] }

    const j = (tomatoSlices - (2 * cheeseSlices)) / 2
    const s = ((cheeseSlices * 4) - tomatoSlices) / 2

    if (j >= 0 && s >= 0) {
        return [j, s]
    }
    else {
        return []
    }
};

// console.log(numOfBurgers(16, 7)) // Output: [1,6]
// console.log(numOfBurgers(17, 4)) // Output: []
// console.log(numOfBurgers(4, 17)) // Output: []
// console.log(numOfBurgers(0, 0)) // Output: [0,0]
// console.log(numOfBurgers(2, 1)) // Output: [0,1]

console.log(numOfBurgers(Math.pow(10,7), Math.pow(10,7) / 4)) // Output: [1,6]
