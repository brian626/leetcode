// 599. Minimum Index Sum of Two Lists

// Suppose Andy and Doris want to choose a restaurant for dinner,
// and they both have a list of favorite restaurants represented by strings.

// You need to help them find out their common interest with the least list
// index sum. If there is a choice tie between answers, output all of them
// with no order requirement. You could assume there always exists an answer.


// Example 1:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]
// Output: ["Shogun"]
// Explanation: The only restaurant they both like is "Shogun".

// Example 2:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Shogun","Burger King"]
// Output: ["Shogun"]
// Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).

// Example 3:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 4:

// Input: list1 = ["Shogun","Tapioca Express","Burger King","KFC"], list2 = ["KNN","KFC","Burger King","Tapioca Express","Shogun"]
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

// Example 5:

// Input: list1 = ["KFC"], list2 = ["KFC"]
// Output: ["KFC"]


// Constraints:

// 1 <= list1.length, list2.length <= 1000
// 1 <= list1[i].length, list2[i].length <= 30
// list1[i] and list2[i] consist of spaces ' ' and English letters.
// All the stings of list1 are unique.
// All the stings of list2 are unique.

function findRestaurant(list1: string[], list2: string[]): string[] {
    let restaurantIndex = new Map()

    for (let i = 0; i < list1.length; i++) {
        const restaurant = list1[i]
        restaurantIndex[restaurant] = [i, -1]
    }

    for (let i = 0; i < list2.length; i++) {
        const restaurant = list2[i]
        if (restaurantIndex[restaurant] === undefined) {
            restaurantIndex[restaurant] = [-1, i]
        }
        else {
            const index1 = restaurantIndex[restaurant][0]
            restaurantIndex[restaurant] = [index1, i]
        }
    }

    let minIndexSum = 999999
    let restaurantChoices: string[] = []
    for (let key in restaurantIndex) {
        let index1 = restaurantIndex[key][0]
        let index2 = restaurantIndex[key][1]
        if (index1 != -1 && index2 != -1) {
            if (index1 + index2 < minIndexSum) {
                restaurantChoices = [key]
                minIndexSum = index1 + index2
            }
            else if (index1 + index2 == minIndexSum) {
                restaurantChoices.push(key)
            }
        }
    }

    return restaurantChoices.reverse()
};

console.log(findRestaurant( ["Shogun","Tapioca Express","Burger King","KFC"], ["Piatti","The Grill at Torrey Pines","Hungry Hunter Steakhouse","Shogun"]))
// Output: ["Shogun"]

console.log(findRestaurant( ["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Shogun","Burger King"] ))
// Output: ["Shogun"]

console.log(findRestaurant( ["Shogun","Tapioca Express","Burger King","KFC"], ["KFC","Burger King","Tapioca Express","Shogun"] ))
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

console.log(findRestaurant( ["Shogun","Tapioca Express","Burger King","KFC"], ["KNN","KFC","Burger King","Tapioca Express","Shogun"] ))
// Output: ["KFC","Burger King","Tapioca Express","Shogun"]

console.log(findRestaurant( ["KFC"], ["KFC"] ))
// Output: ["KFC"]

console.log(findRestaurant( ["KFC"], ["Burger King"] ))
// Output: []
