function sumOfTheDigitsOfHarshadNumber(x: number): number {
    const sumOfDigits = x.toString().split('').map(x => parseInt(x)).reduce((a, b) => a + b, 0);
    if (x % sumOfDigits === 0) {
        return sumOfDigits;
    } else {
        return -1;
    }
};


const x = 23;

console.log(sumOfTheDigitsOfHarshadNumber(x));
