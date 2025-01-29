function isValid(word: string): boolean {
    if (word.length < 3) { return false; }

    if (!containsOnlyDigitsAndLetters(word)) { return false; }

    if (!containsVowel(word)) { return false; }

    if (!containsConsonant(word)) { return false; }

    return true;
};

function containsOnlyDigitsAndLetters(word: string): boolean {
    for (const c of word.split('')) {
        if (!isDigit(c) && !isLetter(c)) {
            return false;
        }
    }

    return true;
}

function isDigit(c: string): boolean {
    return /[0-9]/.test(c);
}

function isLetter(c: string): boolean {
    return /[a-z]/.test(c.toLowerCase());
}

function containsVowel(word: string): boolean {
    return /[aeiou]/.test(word.toLowerCase());
}

function containsConsonant(word: string): boolean {
    return /[bcdfghjklmnpqrstvwxyz]/.test(word.toLowerCase());
}
