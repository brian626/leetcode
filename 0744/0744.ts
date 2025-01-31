function nextGreatestLetter(letters: string[], target: string): string {
    if (target === 'z') { return letters[0]; }

    for (let i = 0; i < letters.length; i++) {
        if (letters[i].charCodeAt(0) > target.charCodeAt(0)) {
            return letters[i];
        }
    }

    return letters[0];
};
