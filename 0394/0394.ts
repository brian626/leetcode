function isDigit(t: string): boolean {
    return t.charCodeAt(0) >= '0'.charCodeAt(0) && t.charCodeAt(0) <= '9'.charCodeAt(0);
}

function decodeString(s: string): string {
    if (!s.includes('[')) { return s; }

    let tokens = tokenize(s);

    console.log(tokens);

    let decoded = '';

    while (tokens.includes('[')) {
        console.log(`top of while loop: < ${tokens.join(' ')} >`);
        let kTokenIndex = -1;
        let openBracketIndex = -1;
        let closeBracketIndex = -1;
        let encodedStringTokenIndex = -1;

        for (let i = 0; i < tokens.length; i++) {
            const token = tokens[i];
            if (isDigit(token)) {
                kTokenIndex = i;
            } else if (token === '[') {
                openBracketIndex = i;
            } else if (token !== ']') {
                encodedStringTokenIndex = i;
            } else if (token === ']') {
                closeBracketIndex = i;
                let decodedString = '';
                for (let j = 0; j < parseInt(tokens[kTokenIndex]); j++) {
                    decodedString += tokens[encodedStringTokenIndex];
                }

                console.log(`  assembling new tokens array from '${tokens.slice(0, kTokenIndex)}' plus '${decodedString}' plus '${tokens.slice(closeBracketIndex + 1)}'`);
                const newEncodedStr = tokens.slice(0, kTokenIndex).concat([decodedString]).concat(tokens.slice(closeBracketIndex + 1)).join('');
                if (!newEncodedStr.includes('[')) {
                    tokens = [];
                    decoded = newEncodedStr;
                } else {
                    tokens = tokenize(newEncodedStr);
                }

                break;
            }
        }

        console.log(`bottom of while loop: < ${tokens.join(' ')} >`);
    }

    return decoded;
};


function tokenize(s: string): string[] {
    const arr = s.split('');
    const tokens: string[] = [];

    let numberStr = '';
    let encodedStr = '';
    while (arr.length > 0) {
        const t = arr.shift();

        if (isDigit(t)) {
            numberStr += t;
        } else if (t === '[' || t === ']') {
            if (encodedStr.length > 0) {
                tokens.push(encodedStr);
                encodedStr = '';
            }
            if (numberStr.length > 0) {
                tokens.push(numberStr);
                numberStr = '';
            }
            tokens.push(t);
        } else {
            encodedStr += t;
        }
    }

    if (encodedStr.length > 0) {
        tokens.push(encodedStr);
    }

    return tokens;
}




// const s = "3[a]2[bc]"; // aaabcbc
// const s = "3[a2[c]]"; // accaccacc
// const s = "2[abc]3[cd]ef"; // abcabccdcdcdef
// const s = "3[z]2[2[y]pq4[2[jk]e1[f]]]ef"; // zzzyypqjkjkefjkjkefjkjkefjkjkefyypqjkjkefjkjkefjkjkefjkjkefef
const s = "leetcode";

console.log(decodeString(s));
