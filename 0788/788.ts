// 788. Rotated Digits

// x is a good number if after rotating each digit individually by 180 degrees,
// we get a valid number that is different from x. Each digit must be rotated -
// we cannot choose to leave it alone.

// A number is valid if each digit remains a digit after rotation. 0, 1, and 8
// rotate to themselves; 2 and 5 rotate to each other (on this case they are rotated
// in a different direction, in other words 2 or 5 gets mirrored); 6 and 9 rotate to
// each other, and the rest of the numbers do not rotate to any other number and become invalid.

// Now given a positive number n, how many numbers x from 1 to n are good?

// Example:
// Input: 10
// Output: 4

// Explanation:
// There are four good numbers in the range [1, 10] : 2, 5, 6, 9.
// Note that 1 and 10 are not good numbers, since they remain unchanged after rotating.

// Note:

// n will be in range [1, 10000].

function rotate(digits: string[]): number {
    for (let i = 0; i < digits.length; i++) {
        const digit: string = digits[i];
        if      (digit === '2') { digits[i] = '5'; }
        else if (digit === '5') { digits[i] = '2'; }
        else if (digit === '6') { digits[i] = '9'; }
        else if (digit === '9') { digits[i] = '6'; }
    }

    return parseInt(digits.join(''), 10);
}

function canRotate(digits: string[]): boolean {
    return digits.indexOf('3') === -1 &&
           digits.indexOf('4') === -1 &&
           digits.indexOf('7') === -1;
}

function rotatedDigits(n: number): number {
    let goodNumbers: number = 0;
    for (let i = 2; i <= n; i++) {
        const digits: string[] = i.toString().split('');
        if (canRotate(digits) && rotate(digits) !== i) {
            goodNumbers++;
        }
    }

    return goodNumbers;
};

console.log(rotatedDigits(10));
