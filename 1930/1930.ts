function countPalindromicSubsequence(s: string): number {
  let palindromes: string[] = [];

  for (let i = 1; i < s.length - 1; i++) {
    const p = makePalindromes(s[i], s.slice(0, i), s.slice(i + 1));
    palindromes = palindromes.concat(p);
  }

  return Array.from(new Set<string>(palindromes)).length;
}

function makePalindromes(
  middle: string,
  left: string,
  right: string
): string[] {
  const palindromes: string[] = [];

  for (let i = 0; i < left.length; i++) {
    if (right.includes(left[i])) {
      console.log(middle, left, right);
      palindromes.push(`${left[i]}${middle}${left[i]}`);
    }
  }

  console.log(palindromes);
  return palindromes;
}

const s = "ckafnafqo";

console.log(countPalindromicSubsequence(s));
