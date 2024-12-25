// 537. Complex Number Multiplication

// A complex number can be represented as a string on the form "real+imaginaryi" where:

// real is the real part and is an integer in the range [-100, 100].
// imaginary is the imaginary part and is an integer in the range [-100, 100].
// i^2 == -1.
// Given two complex numbers num1 and num2 as strings, return a string of the complex number that represents their multiplications.


// Example 1:

// Input: num1 = "1+1i", num2 = "1+1i"
// Output: "0+2i"
// Explanation: (1 + i) * (1 + i) = 1 + i^2 + 2 * i = 2i, and you need convert it to the form of 0+2i.

// Example 2:

// Input: num1 = "1+-1i", num2 = "1+-1i"
// Output: "0+-2i"
// Explanation: (1 - i) * (1 - i) = 1 + i^2 - 2 * i = -2i, and you need convert it to the form of 0+-2i.


// Constraints:

// num1 and num2 are valid complex numbers.

function parseComplexNumber(num: string): [number, number] {
    let real = 0
    let imaginary = 0

    const parts: string[] = num.split("+")
    real = parseInt(parts[0], 10)
    imaginary = parseInt(parts[1].replace(/i/, ""), 10)

    return [real, imaginary]
}

function complexNumberMultiply(num1: string, num2: string): string {
    const [real1, imaginary1] = parseComplexNumber(num1)
    const [real2, imaginary2] = parseComplexNumber(num2)

    const real = (real1 * real2) + (imaginary1 * imaginary2 * -1)
    const imaginary = (real1 * imaginary2) + (imaginary1 * real2)

    return `${real}+${imaginary}i`
};

console.log(complexNumberMultiply("1+1i", "1+1i")) // Output: "0+2i"
console.log(complexNumberMultiply("1+-1i", "1+-1i")) // Output: "0+-2i"
console.log(complexNumberMultiply("1+-1i", "0+0i")) // Output: "0+0i"
