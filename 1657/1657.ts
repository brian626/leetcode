function closeStrings(word1: string, word2: string): boolean {
    if (word1.length !== word2.length) { return false; }

    const w1 = word1.split('').sort((a, b) => a.localeCompare(b));
    const w2 = word2.split('').sort((a, b) => a.localeCompare(b));

    const frequencies1: Map<string, number> = new Map<string, number>();
    for (const c of w1) { frequencies1.set(c, (frequencies1.get(c) || 0) + 1); }
    const letters1: string[] = Array.from(frequencies1.keys()).sort((a, b) => a.localeCompare(b));
    const counts1: number[] = Array.from(frequencies1.values()).sort((a, b) => a - b);

    const frequencies2: Map<string, number> = new Map<string, number>();
    for (const c of w2) { frequencies2.set(c, (frequencies2.get(c) || 0) + 1); }
    const letters2: string[] = Array.from(frequencies2.keys()).sort((a, b) => a.localeCompare(b));
    const counts2: number[] = Array.from(frequencies2.values()).sort((a, b) => a - b);

    return letters1.join(',') === letters2.join(',') && counts1.join(',') === counts2.join(',');
};

const word1 = "uau"
const word2 = "ssx"

console.log(closeStrings(word1, word2));


// word1 = "cabbba" => "aabbbc" => a:2, b:3, c:1 => [a,b,c], [1,2,3]
// word2 = "abbccc" => "abbccc" => a:1, b:2, c:3 => [a,b,c], [1,2,3]
