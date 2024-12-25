// 791. Custom Sort String

// order and str are strings composed of lowercase letters. In order, no letter occurs more than once.

// order was sorted in some custom order previously. We want to permute the characters of str so that
// they match the order that order was sorted. More specifically, if x occurs before y in order, then
// x should occur before y in the returned string.

// Return any permutation of str (as a string) that satisfies this property.

// Example:

// Input:
// order = "cba"
// str = "abcd"

// Output: "cbad"

// Explanation:
// "a", "b", "c" appear in order, so the order of "a", "b", "c" should be "c", "b", and "a".
// Since "d" does not appear in order, it can be at any position in the returned string. "dcba", "cdba", "cbda" are also valid outputs.


// Note:

// order has length at most 26, and no character is repeated in order.
// str has length at most 200.
// order and str consist of lowercase letters only.

function customSortString(order: string, str: string): string {
    let filteredStr: string = str.split('').filter(x => order.indexOf(x) !== -1).join('')
    let rejectedStr: string = str.split('').filter(x => order.indexOf(x) === -1).join('')
    // console.log(filteredStr);
    // console.log(rejectedStr);

    filteredStr = filteredStr.split('').sort((a,b) => {
        const indexA: number = order.indexOf(a);
        const indexB: number = order.indexOf(b);
        return indexA - indexB;
    }).join('');

    // console.log(filteredStr + rejectedStr);

    return filteredStr + rejectedStr;
};

console.log(customSortString('cba', 'abcd')); // 'cbad'
console.log(customSortString("exv", "xwvee")); // "eexvw"
