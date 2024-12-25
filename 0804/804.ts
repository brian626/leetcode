// 804. Unique Morse Code Words

// International Morse Code defines a standard encoding where each letter is mapped to a series
// of dots and dashes, as follows: "a" maps to ".-", "b" maps to "-...", "c" maps to "-.-.", and so on.

// For convenience, the full table for the 26 letters of the English alphabet is given below:

// [".-","-...","-.-.","-..",".","..-.","--.","....","..",".---","-.-",".-..","--","-.","---",".--.","--.-",".-.","...","-","..-","...-",".--","-..-","-.--","--.."]
// Now, given a list of words, each word can be written as a concatenation of the Morse code of each
// letter. For example, "cab" can be written as "-.-..--...", (which is the concatenation "-.-." +
// ".-" + "-..."). We'll call such a concatenation, the transformation of a word.

// Return the number of different transformations among all words we have.

// Example:

// Input: words = ["gin", "zen", "gig", "msg"]
// Output: 2

// Explanation:
// The transformation of each word is:
// "gin" -> "--...-."
// "zen" -> "--...-."
// "gig" -> "--...--."
// "msg" -> "--...--."

// There are 2 different transformations, "--...-." and "--...--.".

// Note:

// The length of words will be at most 100.
// Each words[i] will have length in range [1, 12].
// words[i] will only consist of lowercase letters.

function convert(word: string): string {
    let morseWord: string = '';
    word.split('').forEach(l => {
        if (l === 'a')      { morseWord += '.-'; }
        else if (l === 'b') { morseWord += '-...'; }
        else if (l === 'c') { morseWord += '-.-.'; }
        else if (l === 'd') { morseWord += '-..'; }
        else if (l === 'e') { morseWord += '.'; }
        else if (l === 'f') { morseWord += '..-.'; }
        else if (l === 'g') { morseWord += '--.'; }
        else if (l === 'h') { morseWord += '....'; }
        else if (l === 'i') { morseWord += '..'; }
        else if (l === 'j') { morseWord += '.---'; }
        else if (l === 'k') { morseWord += '-.-'; }
        else if (l === 'l') { morseWord += '.-..'; }
        else if (l === 'm') { morseWord += '--'; }
        else if (l === 'n') { morseWord += '-.'; }
        else if (l === 'o') { morseWord += '---'; }
        else if (l === 'p') { morseWord += '.--.'; }
        else if (l === 'q') { morseWord += '--.-'; }
        else if (l === 'r') { morseWord += '.-.'; }
        else if (l === 's') { morseWord += '...'; }
        else if (l === 't') { morseWord += '-'; }
        else if (l === 'u') { morseWord += '..-'; }
        else if (l === 'v') { morseWord += '...-'; }
        else if (l === 'w') { morseWord += '.--'; }
        else if (l === 'x') { morseWord += '-..-'; }
        else if (l === 'y') { morseWord += '-.--'; }
        else if (l === 'z') { morseWord += '--..'; }
    });

    return morseWord;
}

function uniqueMorseRepresentations(words: string[]): number {
    let morseSet: Set<string> = new Set<string>();
    words.forEach(word => morseSet.add(convert(word)));
    return morseSet.size;
};

console.log(uniqueMorseRepresentations(["gin", "zen", "gig", "msg"])); // 2
