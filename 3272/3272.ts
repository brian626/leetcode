function countGoodIntegers(n: number, k: number): number {
    const low = Math.pow(10, n - 1);
    const high = Math.pow(10, n) - 1;

    let first = low;
    while (first % k !== 0) {
        first++;
    }

    let last = high;
    // while (last % k !== 0) {
    //     last--;
    // }
    // last++;

    console.log(`checking numbers between ${first} and ${last}`);

    const goodInts: Set<string> = new Set<string>();

    for (let i = first; i <= last; i += k) {
        const s = i.toString();

        if (!goodInts.has(s) && isPalindrome(s)) {
            const sorted = s.split('').sort().join('');
            goodInts.add(sorted);
            // console.log(i);
        }
    }

    // console.log(goodInts);

    let count = 0;
    // for (const g of goodInts) {
    //     if (g.split('').filter(x => x !== g[0]).length === 0) {
    //         console.log(`adding 1 for ${g}`);
    //         count++;
    //     } else {
    //         let s = g.split('').join('');

    //         if (s.startsWith('0')) {
    //             s = s.slice(1);
    //         }
    //         console.log(`adding ${s.length} for ${g}`);
    //         count += s.length;
    //     }
    // }

    for (let i = first; i <= last; i++) {
        const rearranged = i.toString().split('').sort().join('');
        if (goodInts.has(rearranged)) {
            count++;
            // console.log(i);
            // } else {
            //     console.log(`no ${i}`);
        }
    }

    return count;
};

function isPalindrome(s: string): boolean {
    for (let i = 0; i <= s.length / 2; i++) {
        if (s[i] != s[s.length - i - 1]) {
            return false;
        }
    }

    return true;
};


const n = 6, k = 9;
console.log(countGoodIntegers(n, k));
