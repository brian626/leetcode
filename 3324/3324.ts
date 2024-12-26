function stringSequence(target: string): string[] {
    const strings: string[] = [];

    for (let i = 0; i < target.length; i++) {
        const c = target[i];
        const lastString = strings[strings.length - 1] || '';

        for (let j = 'a'.charCodeAt(0); j <= c.charCodeAt(0); j++) {
            strings.push(lastString + String.fromCharCode(j));
        }
    }

    return strings;
};

const target = "he";

console.log(stringSequence(target));
