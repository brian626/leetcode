function reorderSpaces(text: string): string {
    const numSpaces = text.split('').filter(x => x === ' ').length;
    const words = text.trim().replace(/\s+/g, ' ').split(' ');
    const innerSpaces = words.length > 1 ? Math.floor(numSpaces / (words.length - 1)) : 0;
    const trailingSpaces = words.length > 1 ? numSpaces % (words.length - 1) : numSpaces;

    console.log(numSpaces, innerSpaces, trailingSpaces);

    let output = '';
    for (let i = 0; i < words.length; i++) {
        output += words[i];
        if (i < words.length - 1) {
            for (let j = 0; j < innerSpaces; j++) {
                output += ' ';
            }
        } else {
            for (let j = 0; j < trailingSpaces; j++) {
                output += ' ';
            }
        }
    }

    return output;
};

const text = "  hello";

console.log('"' + reorderSpaces(text) + '"');
