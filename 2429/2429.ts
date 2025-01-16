function minimizeXor(num1: number, num2: number): number {
    const maxNumBits = Math.max(num1.toString(2).length, num2.toString(2).length);
    const bits1 = num1.toString(2).padStart(maxNumBits, '0').split('');
    const bits2 = num2.toString(2).padStart(maxNumBits, '0').split('');
    console.log(bits1.join(''), bits2.join(''));

    const numBits1 = bits1.filter(x => x === '1').length;
    const numBits2 = bits2.filter(x => x === '1').length;

    if (numBits1 === numBits2) {
        console.log(`case 1`);
        return num1;
    } else if (numBits1 > numBits2) {
        console.log(`case 2`);
        console.log(bits1);
        for (let i = numBits1 - numBits2; i > 0; i--) {
            const lastOne = bits1.lastIndexOf('1');
            bits1[lastOne] = '0';
        }

        console.log(bits1);
        return parseInt(bits1.join(''), 2);
    } else {
        console.log(`case 3`);
        console.log(bits1);
        for (let i = numBits2 - numBits1; i > 0; i--) {
            const lastZero = bits1.lastIndexOf('0');
            bits1[lastZero] = '1';
        }

        console.log(bits1);
        return parseInt(bits1.join(''), 2);
    }
};

const num1 = 25;
const num2 = 72;

console.log(minimizeXor(num1, num2));
