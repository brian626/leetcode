function kthCharacter(k: number): string {
    let word = 'a';

    while (word.length < k) {
        let generatedString = '';
        for (let i = 0; i < word.length; i++) {
            let nextChar = word[i].charCodeAt(0) + 1;
            if (nextChar > 'z'.charCodeAt(0)) {
                nextChar = 'a'.charCodeAt(0);
            }
            generatedString += String.fromCharCode(nextChar);
        }

        word += generatedString;
    }

    return word[k - 1];
};

const k = 500;

console.log(kthCharacter(k));
