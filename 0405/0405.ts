function toHex(num: number): string {
    if (num === 0) { return '0'; }

    let negative = false;
    if (num < 0) {
        negative = true;
        num *= -1;
    }

    // Convert to binary
    let binaryDigits: string[] = [];

    while (num > 0) {
        const remainder = num % 2;
        binaryDigits.push(toBinaryDigit(remainder));

        num = Math.floor(num / 2);
    }

    binaryDigits = binaryDigits.reverse();
    binaryDigits = binaryDigits.join('').padStart(32, '0').split('');

    if (negative) {
        // Flip digits
        for (let i = 0; i < binaryDigits.length; i++) {
            binaryDigits[i] = binaryDigits[i] === '0' ? '1' : '0';
        }

        // Add one, ignoring overflow
        for (let i = binaryDigits.length - 1; i >= 0; i--) {
            if (binaryDigits[i] === '0') {
                binaryDigits[i] = '1';
                break;
            } else {
                binaryDigits[i] = '0';
            }
        }
    }

    // Convert to hex
    let hexDigits: string[] = [];
    for (let i = 0; i < 8; i++) {
        hexDigits.push(binToHex(binaryDigits.slice(i * 4, i * 4 + 4)));
    }

    while (hexDigits[0] === '0') {
        hexDigits.shift();
    }

    return hexDigits.join('');
};


function toBinaryDigit(d: number): string {
    return d.toString();
}

function binToHex(b: string[]): string {
    switch (b.join('')) {
        case '0000': return '0'; break;
        case '0001': return '1'; break;
        case '0010': return '2'; break;
        case '0011': return '3'; break;
        case '0100': return '4'; break;
        case '0101': return '5'; break;
        case '0110': return '6'; break;
        case '0111': return '7'; break;
        case '1000': return '8'; break;
        case '1001': return '9'; break;
        case '1010': return 'a'; break;
        case '1011': return 'b'; break;
        case '1100': return 'c'; break;
        case '1101': return 'd'; break;
        case '1110': return 'e'; break;
        case '1111': return 'f'; break;
    }
}

console.log(toHex(-1));
