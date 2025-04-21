function say(s: string): string {
    let output = "";

    let i = 0;
    while (i < s.length) {
        let val = s[i++];
        let count = 1;
        while (i < s.length && s[i] === val) {
            count++;
            i++;
        }

        output += `${count}${val}`;
    }

    return output;
}

function countAndSay(n: number): string {
    if (n === 1) { return "1"; }
    else { return say(countAndSay(n - 1)); }
};

console.log(countAndSay(9));
