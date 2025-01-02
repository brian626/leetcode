function compress(chars: string[]): number {
    if (chars.length == 1) { return 1 }

    let readIndex = 0, writeIndex = 0
    while (readIndex < chars.length) {
        let numConsecutive = 1
        if (readIndex < chars.length + 1) {
            while (chars[readIndex] == chars[readIndex + numConsecutive]) {
                numConsecutive++
            }
        }

        chars[writeIndex++] = chars[readIndex]
        readIndex += numConsecutive

        if (numConsecutive != 1) {
            const countDigits: string[] = numConsecutive.toString().split("")
            countDigits.forEach(d => {
                chars[writeIndex++] = d
            })
        }
    }

    return writeIndex
};

let chars: string[] = []
let ret: number = 0

chars = ["a","a","b","b","c","c","c"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 6, and the first 6 characters of the input array should be: ["a","2","b","2","c","3"]

chars = ["a"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 1, and the first character of the input array should be: ["a"]

chars = ["a","b","b","b","b","b","b","b","b","b","b","b","b"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 4, and the first 4 characters of the input array should be: ["a","b","1","2"].

chars = ["a","a","a","b","b","a","a"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 6, and the first 6 characters of the input array should be: ["a","3","b","2","a","2"].

chars = ["a"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 1, and the first 1 characters of the input array should be: ["a"].

chars = ["a","b","c"]
ret = compress(chars)
console.log(ret)
console.log(chars.slice(0,ret))
// Output: Return 3, and the first 3 characters of the input array should be: ["a", "b", "c"].
