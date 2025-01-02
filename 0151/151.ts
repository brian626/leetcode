function reverseWords(s: string): string {
    return s.trim().replace(/ +/g, " ").split(" ").reverse().join(" ")
};

console.log(reverseWords("the sky is blue")) // Output: "blue is sky the"
console.log(reverseWords("  hello world  ")) // Output: "world hello"
console.log(reverseWords("a good   example")) // Output: "example good a"
console.log(reverseWords("  Bob    Loves  Alice   ")) // Output: "Alice Loves Bob"
console.log(reverseWords("Alice does not even like bob")) // Output: "bob like even not does Alice"
