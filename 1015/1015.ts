// 1015. Smallest Integer Divisible by K

// Given a positive integer k, you need to find the length of the smallest positive
// integer n such that n is divisible by k, and n only contains the digit 1.

// Return the length of n. If there is no such n, return -1.

// Note: n may not fit in a 64-bit signed integer.



// Example 1:

// Input: k = 1
// Output: 1
// Explanation: The smallest answer is n = 1, which has length 1.

// Example 2:

// Input: k = 2
// Output: -1
// Explanation: There is no such positive integer n divisible by 2.

// Example 3:

// Input: k = 3
// Output: 3
// Explanation: The smallest answer is n = 111, which has length 3.


// Constraints:

// 1 <= k <= 10^5

function allOnes(n: number): boolean {
    return n.toString().split('').filter(x => x !== '1').length === 0;
}

function smallestRepunitDivByK(K: number): number {
    if (K === 1) { return 1; }
    if (K % 2 === 0) { return -1; }

    // We know K is odd, and at least 3.
    // For K * x to end in 1, the last digit of K * x must also end in 1.
    //
    // That is, if K ends in 3, then x must be 7, 17, 27, 37, etc.
    //          if K ends in 7, then x must be 3, 13, 23, 33, etc.
    //          if K ends in 9, then x must be 9, 19, 29, 39, etc.
    //
    // If K ends in 5, there is no answer.
    // If K ends in 1, then either K is the answer (if K is all 1's) or there is no answer.

    let numDigits: number = 3;

    const lastDigit: string = K.toString().split('').pop();
    const kString: string = K.toString();
    switch (lastDigit) {
        case '1':
            return kString.split('').filter(x => x !== '1').length === 0 ? kString.length : -1;
        case '3':
            let multiplier = 7;

            ;
        case '5':
            return -1;
        case '7':
            ;
        case '9':
            ;
    }

    return numDigits;
};

// let K = 73;
// let x = 7;
// while (true) {
//     console.log(`${K} * ${x} = ${K * x}`);
//     if (allOnes(K * x)) {
//         console.log('all ones!');
//         break;
//     }
//     x += 10;
// }

let K = 63;
let numDigits = 3;
while (true) {
    let strProduct: string = '';
    for (let i = 0; i < numDigits; i++) { strProduct += '1'; }
    let product: number = parseInt(strProduct, 10);
    if (product % K === 0) {
        console.log(numDigits);
        console.log(strProduct);
        console.log(product);
        break;
    }
    numDigits++;
}
