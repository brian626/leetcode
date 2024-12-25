function numDecodings(s: string): number {
    const tokens = tokenize(s);
    console.log(tokens.length);

    return tokens.length;
};


function tokenize(s: string): string[][] {
    const tokenSets: string[][] = [[s]];
    const completedTokenSets: string[][] = [];

    while (tokenSets.length > 0) {
        console.log(`tokenSets: ${tokenSets.length}`);
        console.log(`completedTokenSets: ${completedTokenSets.length}`);
        console.log();

        const t = tokenSets.shift();
        // console.log(`t starts as [${t}], tokenSets is now [${tokenSets.length}]`);
        const lastToken = t[t.length - 1];
        if (lastToken.length === 1) {
            if (canDecode(lastToken)) {
                console.log(`A: pushing completed token set ${t}`);
                completedTokenSets.push(t);
            }
            continue;
        }

        t.pop();
        const newTokens: string[][] = [];

        if (canDecode(lastToken[0])) {
            const newToken = [lastToken[0]];
            if (lastToken.length > 1) {
                newToken.push(lastToken.slice(1));
                newTokens.push(newToken);
            } else {
                console.log(`B: pushing completed token set ${newToken}`);
                completedTokenSets.push(newToken);
            }
        }
        if (canDecode(lastToken.slice(0, 2))) {
            const newToken = [lastToken.slice(0, 2)];
            if (lastToken.length > 2) {
                newToken.push(lastToken.slice(2));
                newTokens.push(newToken);
            } else {
                newToken.unshift(...t);
                console.log(`C: pushing completed token set ${newToken}`);
                completedTokenSets.push(newToken);
            }
        }

        for (const nt of newTokens) {
            tokenSets.push(t.concat(nt));
        }
    }

    // console.log(`completedTokenSets:`);
    // console.log(completedTokenSets);
    // console.log();
    return completedTokenSets;
}

function canDecode(s: string): boolean {
    if (s[0] === '0') { return false; }

    const decode = decodeToNum(s);

    if (decode > 0 && decode < 27) {
        return true;
    }

    return false;

    function decodeToNum(s: string): number {
        return parseInt(s);
    }
}


const s = "1111111111111111111111111111";

console.log(numDecodings(s));
