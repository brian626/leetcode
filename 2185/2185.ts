function prefixCount(words: string[], pref: string): number {
    return words.filter(x => x.startsWith(pref)).length;
};

const words = ["pay","attention","practice","attend"]
const pref = "at"

console.log(prefixCount(words, pref));
