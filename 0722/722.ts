// 722. Remove Comments

// Given a C++ program, remove comments from it. The program source is an array where
// source[i] is the i-th line of the source code. This represents the result of splitting
// the original source code string by the newline character \n.

// In C++, there are two types of comments, line comments, and block comments.

// The string // denotes a line comment, which represents that it and rest of the characters
// to the right of it in the same line should be ignored.

// The string /* denotes a block comment, which represents that all characters until the next
// (non-overlapping) occurrence of */ should be ignored. (Here, occurrences happen in reading
// order: line by line from left to right.) To be clear, the string /*/ does not yet end the block
// comment, as the ending would be overlapping the beginning.

// The first effective comment takes precedence over others: if the string // occurs in a block
// comment, it is ignored. Similarly, if the string /* occurs in a line or block comment, it is also ignored.

// If a certain line of code is empty after removing comments, you must not output that line:
// each string in the answer list will be non-empty.

// There will be no control characters, single quote, or double quote characters. For example,
// source = "string s = "/* Not a comment. */";" will not be a test case. (Also, nothing else
// such as defines or macros will interfere with the comments.)

// It is guaranteed that every open block comment will eventually be closed, so /* outside of a
// line or block comment always starts a new comment.

// Finally, implicit newline characters can be deleted by block comments. Please see the examples below for details.

// After removing the comments from the source code, return the source code in the same format.

// Example 1:
// Input:
// source = ["/*Test program */", "int main()", "{ ", "  // variable declaration ", "int a, b, c;", "/* This is a test", "   multiline  ", "   comment for ", "   testing */", "a = b + c;", "}"]

// The line by line code is visualized as below:
// /*Test program */
// int main()
// {
//   // variable declaration
// int a, b, c;
// /* This is a test
//    multiline
//    comment for
//    testing */
// a = b + c;
// }

// Output: ["int main()",
//         "{ ",
//         "  ",
//         "int a, b, c;",
//         "a = b + c;",
//         "}"]

// The line by line code is visualized as below:
// int main()
// {

// int a, b, c;
// a = b + c;
// }

// Explanation:
// The string /* denotes a block comment, including line 1 and lines 6-9. The string // denotes line 4 as comments.

// Example 2:
// Input:
// source = ["a/*comment", "line", "more_comment*/b"]
// Output: ["ab"]
// Explanation: The original source string is "a/*comment\nline\nmore_comment*/b", where we have bolded the newline characters.  After deletion, the implicit newline characters are deleted, leaving the string "ab", which when delimited by newline characters becomes ["ab"].
// Note:

// The length of source is in the range [1, 100].
// The length of source[i] is in the range [0, 80].
// Every open block comment is eventually closed.
// There are no single-quote, double-quote, or control characters in the source code.

/* Scan line for single-line block comments and remove them, making sure to ignore
 * multi-line block comments or anything that comes after a line comment. */
function processSingleLineBlockComments(line: string): [string, boolean] {
    log(`processSingleLineBlockComments called`)
    const firstBlockCommentStart: number  = line.indexOf("/*")
    const firstBlockCommentEnd: number = line.slice(firstBlockCommentStart + 2).indexOf("*/")
    const firstLineCommentStart: number = line.indexOf("//")

    if (firstLineCommentStart == -1) {
        log(`  Case 1: No line comments found`)
        if (firstBlockCommentStart != -1 && firstBlockCommentEnd != -1) {
            log(`  Case 2: Single-line block comment found`)
            let output = line.slice(0, firstBlockCommentStart) + line.slice(firstBlockCommentStart + firstBlockCommentEnd + 4)
            return [output, true]
        }
        else {
            log(`  Case 3: No single-line block comment found`)
            return [line, false]
        }
    }
    else {
        log(`  Case 4: Line comments found`)
        if (firstBlockCommentStart == -1 || firstLineCommentStart < firstBlockCommentStart) {
            log(`  Case 5: Line comment found before block comment start`)
            return [line, false]
        }
        else if (firstBlockCommentStart != -1 && firstBlockCommentEnd != -1) {
            log(`  Case 6: Line comment found within single-line block comment`)
            let output = line.slice(0, firstBlockCommentStart) + line.slice(firstBlockCommentStart + firstBlockCommentEnd + 4)
            return [output, true]
        }
        else {
            log(`  Case 7: Line comment found after single-line block comment`)
            return [line, false]
        }
    }
}

/* Scan line for line comments and truncate anything that comes after them, making sure to ignore
 * multi-line block comments. */
function processLineComments(line: string): string {
    log(`processLineComments called`)
    const firstBlockCommentStart: number  = line.indexOf("/*")
    const firstLineCommentStart: number = line.indexOf("//")

    if (firstLineCommentStart == -1) {
        log(`  Case 1: No line comment found`)
        return line
    }
    else {
        if (firstBlockCommentStart == -1 || firstBlockCommentStart > firstLineCommentStart) {
            log(`  Case 2: Line comment found`)
            return line.slice(0, firstLineCommentStart)
        }
        else {
            log(`  Case 3: No line comment found`)
            return line
        }
    }
}

/* Scan line for multi-line block comments and remove anything that comes after them. */
function processMultiLineBlockComments(line: string): [string, boolean] {
    log(`processSingleLineBlockComments called`)
    const firstBlockCommentStart: number  = line.indexOf("/*")

    if (firstBlockCommentStart == -1) {
        log(`  Case 1: No block comment found`)
        return [line, false]
    }
    else {
        log(`  Case 2: Block comment started`)
        return [line.slice(0, firstBlockCommentStart), true]
    }
}

/* Scan line for multi-line block comment end and remove anything that comes before them. */
function processMultiLineBlockCommentEnd(line: string): [string, boolean] {
    log(`processMultiLineBlockCommentEnd called`)
    const firstBlockCommentEnd: number = line.indexOf("*/")

    if (firstBlockCommentEnd != -1) {
        return [line.slice(firstBlockCommentEnd + 2), true]
    }
    else {
        return ["", false]
    }
}

function removeComments(source: string[]): string[] {
    let i = 0
    let outputBuffer: string = ""
    let output: string[] = []
    let inBlockComment: boolean = false

    while (i < source.length) {
        let line = source[i]
        log(`line ${i}: \"${line}\", outputBuffer: \"${outputBuffer}\"`)

        if (inBlockComment) {
            // Stage 1: Look for a multi-line block comment end.
            let [stage1Line, blockCommentEnded] = processMultiLineBlockCommentEnd(line)

            if (blockCommentEnded) {
                inBlockComment = false

                // Stage 2: Remove any line comments
                let stage2Line = processLineComments(stage1Line)

                log(`  line after stage 2: \"${stage2Line}\"`)

                outputBuffer += stage2Line
            }
        }
        else {
            // Stage 1: Remove any single-line block comments
            let [stage1Line, blockCommentRemoved] = processSingleLineBlockComments(line)
            while (blockCommentRemoved) {
                [stage1Line, blockCommentRemoved] = processSingleLineBlockComments(stage1Line)
            }

            log(`  line after stage 1: \"${stage1Line}\"`)

            // Stage 2: Remove any line comments
            let stage2Line = processLineComments(stage1Line)

            log(`  line after stage 2: \"${stage2Line}\"`)

            // Stage 3: Remove any multi-line block comments
            let [stage3Line, blockCommentStarted] = processMultiLineBlockComments(stage2Line)

            log(`  line after stage 3: \"${stage3Line}\"`)

            outputBuffer += stage3Line

            if (blockCommentStarted) {
                inBlockComment = true
            }
        }

        if (!inBlockComment && outputBuffer.length > 0) {
            output.push(outputBuffer)
            outputBuffer = ""
        }

        i++
    }

    return output
};

let DEBUG_722: boolean = true
function log(s: string): void {
    if (DEBUG_722) {
        console.log(s)
    }
}

// console.log(removeComments(
//     [
//         "/*Test program */",
//         "int main()",
//         "{ ",
//         "  // variable declaration ",
//         "int a, b, c;",
//         "/* This is a test",
//         "   multiline  ",
//         "   comment for ",
//         "   testing */",
//         "a = b + c;",
//         "}"
//     ]
// ))

// console.log(removeComments(
//     [
//         "a/*comment",
//         "line",
//         "more_comment*/b"
//     ]
// ))

// console.log(removeComments(
//     [
//         "class test{",
//         "public: ",
//         "   int x = 1;",
//         "   /*double y = 1;*/",
//         "   char c;",
//         "};"
//     ]
// ))

console.log(removeComments(
    [
        "a/*/b//*c",
        "blank",
        "d/*/e*//f"
    ]
))

console.log(removeComments(
    [
        "a/*/b//*c",
        "blank",
        "d//*e/*/f"
    ]
))


// console.log(removeComments(
//     [
//         "/*/dadb/*/aec*////*//*ee*//*//b*////*badbda//*bbacdbbd*//ceb//*cdd//**//de*////*", // expected: aec*
//         "ec//*//*eebd/*/*//*////*ea/*/bc*//cbdacbeadcac/*/cee*//bcdcdde*//adabeaccdd//*", // expected: ec
//         "ddadbede//*//*/*/ac/*/ea//*bbeb/*/ea//*a//*//*cdbeb*//ab/*/abde/*//*/d//**////*", // ddadbede
//         "e/*/eabeea/*///*c*////*dc*//bcadcde/*/acbe//*d/*/*//ae//*dc//*cc//*//*eaebb*//", // e
//         "eed*//cd//**///*/*//e//*bbcbbaedb*//aabb//*badb*//d/*/e*//ade//*bacbc*//ea//*a", // eed*
//         "/*/bcbc//*ebdb/*/bab/*/a/*//*/d/*///*de/*///*d*//dc*///*/cd//*ccd//*a//*caacad", // bab
//         "/*/cadaacca/*/c/*/c*//bb*////*//*e//*/*//*//*//*/ebd*//abd/*/ce*//e/*/aaa//*//*", // c/bb*
//         "cbae*//cc*///*/e/*//*/d*//bdeeee//*b*//de*//aceca*//dddd*///*///*deba*//abbdd/*/", // cbae*
// ]
// ))

// console.log(removeComments(
//     [
//         "dcabe/*/a/*/bdc//*cec*//ebabc//**//*//cc//*b*//*////*abdea*///*/c*//bc//*/*/ae",
//         "badcc//**//*///*/dd//*d*//*//*////*d*//eabb/*/de/*//*/*//a/*/c/*/c//*dad/*/*//",
//         "dd*////*//*//*/*/*//e/*/ec*//cac*//d//*aadc/*/ae/*/ebc//*//**//*///*/bbd*//ee/*/",
//         "eb/*///*cd*//dcdbaaadd//*ced/*/dcabe//*//*a/*//*///*ea*///*//*/*//b/*//*/dd/*/",
//         "ba*//e*//cd//*/*/dd/*/*//dd//**//aab//**//*//*//d/*//*/*//*//*//cddecbbb//*ee*//",
//         "ab//*d*//d/*/dbdcadb//*badbedb//*ac//*bd*///*//*///*/*//*/d*//d*//c/*/a//*cb//*",
//         "*//e//*ad//*cdabb*///*/d/*/bcbad//*ba/*///*d/*//*/ab//*/*//*/*//*//cb//**//cac",
//         "*//bedcba/*/ee/*/ecc/*/e//**//b/*/bebcbac/*//*/bcaa//*adacdcdb*///*/ecb*//e//*",
//         "aeabd/*/aeead/*/ccccd//*dc*////*edc*//e/*/*//c//**//b//*aceaa/*/ccbabed*//dbba",
//         "c/*/a*//aa//**//b*//beecc//*aea/*///**//c//*//*bcbb/*/e/*/*//*////*//*b/*/bdbe",
//         "de/*/c*//aedb*//b*//*//*//bdad*//bece/*/ce/*/*//cacbea/*/ee/*//*/c//*ab//*/*/*//",
//         "//**//cec//*ae/*/baeb//*be//*ddcbdc*//ae//*dc*//*//cbb*//cadabe*//cca//*/*/c*//",
//         "//*a*//d/*/c/*/da*//ac*////**//cbb*//eccdba/*/cdec//*eb/*/ebec//*aac/*/cdcd//*",
//         "*//cd*//dde//**//a/*/ea//*//*eb/*/c//*/*/babac/*/b/*/caede*///*/eabcdd*//*///*/",
//         "//*d/*/*//aad//**//bcad/*///*a/*/d//*//*cebdcbedcdadebdab/*/b*//bbcabcddbab*//",
//         "*///*//*/*//*//cccb/*/*//bee/*/ace*//da//*bdb//*db*//ccdab*////*/*/*//adb//*da",
//         "//*aeb*//badc*//daaa*//e/*/*//aaead*//eb//*/*///*//*ae//**//c//*/*/abbdccccbe//*",
//         "/*/b//*//*e//*b*//d/*/aea*//*//ae/*/c//*c*////*bdeb*//bb*//cbc/*//*/cbebabcccb",
//         "e/*/daeaebc*//edceacc/*///**//e/*/ec/*/a*//bcab*///*/bbdc/*/abcdbe//**//da//*c",
//         "ca//*c//*ba//*decbc*//cccdda/*/*//bcaead/*/*///*///*d/*/dda*//acdd/*///**//c//*",
//         "ec//*/*/a//*bcb//*c/*/d//*e//*//*ce/*///*aeb//*b*//eb/*/edeeec//**//bdddc/*/c//*",
//         "ebdce//*dedaaeda/*/*//aaea//*//*//*//**//d//*//*/*/*///*/c/*/dcadec//*/*/e*//a",
//         "dadc//*/*/deed/*/*//*///*///*/*/e*//eeb/*//*/c//*dc*///*/dc/*/b//*d*////*/*/c//*",
//         "/*/caddc//*//*b*//*//d/*/eadddaabebeedd//*b*//ebc/*/ec//*e/*/b*///*/abee//*/*/",
//         "cb/*/d/*/eadebcaebded*//eaedc/*/e*////*a*//d//*aa*//ecedd//*abb*//dc//*//*ccbe",
//         "ee//*bebbbce//*aaed//*//*/*//*///*da//*a//*//*//*//*beb*////*dbdb/*//*//*///*b",
//         "eb/*/*///*/*//ce/*//*/bcdbdeee//**////*e//**//c*//eab*///*//*//*/da/*/ca/*/e//*",
//         "dd//*/*//*//*/eab*///*/cddb//*//*//*bb//*//**///*/eadbbdcccdeb/*/cdecdadb/*/ca",
//         "//*ccaa//*/*/ca/*/a/*/a/*/a*//*//c*//d//*//*d//*bb/*/*//a*//cb//**//bd*//aa*//",
//         "cbccc//*ce/*/bb/*/aa*//eca//*b*///*//*///*dde*//*//c/*/a/*/cdac/*//*/*//eb//*b",
//         "//*bceedbeb*//eaedccc//*dc/*/abeed/*/ede*///*/ebaa*////*a//*//*eb*//b*//b//*/*/",
//         "//*d//*//*bbbd/*/ab*//ae*//*//e/*/ecea*//ceda*////*ccd/*/e//*ebc*//a/*//*/cea*//",
//         "da*//*//e/*//*/*//b*//dbebcac//*db//*a//*a//*b//*ad/*/*///*///*dcae//*//*ebebc",
//         "d*//ab/*/bac/*/*//cc/*///**//e/*/de//*/*/eaeee/*/*//bacd/*/b//*b*////**////*/*/",
//         "b*///*//*/bb//*cca//*bcabc//*//*a*//ea/*/e*//c//*ba/*/bce/*//*/bad*//da/*/dc/*/",
//         "da/*//*/c*//*//a*//e*//d/*///*a//*//*bc//**//bbd*///*/*//*//ede/*/b/*/ab//*/*/",
//         "de//*c/*/bdc*//c/*/*//*//d//*cd/*/ce*//aaaca*///*/ccd/*/a//*b/*/beaa/*//*/dbdc",
//         "e//*ad/*/dbc*//dbeae*//d//**//*////*a//**//*////*a*//*//*//cecececacdbc/*/a/*/",
//         "/*//*/b/*/ed*///*/bb/*/eda*//ce*//c/*///*/*/cdcad//*d//*b*//ee//**//e/*/aeecbd",
//         "dbbbe//**////**//c//*/*/aaccbab/*/*//abc/*/e/*///*a*//edc/*//*/a*///*/cccbe//*",
//         "ccd*//ebb//*/*///*e*//e*//*//e//**//ec//*a*////*//*//*bcb//*e/*/d/*//*/ca/*//*/",
//         "*//a*///*/bea//*cba*//bbe*//ba//*ccec/*/b/*/aeadbc/*///*eeb//*eeedc/*/a//*aaeb",
//         "adaabdaaea//**//ed//**//cbeab/*//*//*/e/*/edb/*/e//*//*ccbec*//e*///*/e/*//*///*",
//         "eec*//adebbbbbb*//acb/*/e*////*/*/*//a/*///*acbedd//*cd//*be*//b//*e/*/db*//*//",
//         "/*/dbcbd*//a/*/ede//*b*//addc//**///*/deec*///*//*/ccddae//*aac/*///*bbbeabcec",
//         "//*//*//*deaa/*/ebeb*//dbbe//**//abceededcb//*//*ebe*//ce*//c*//cc*//ce*////*//*",
//         "//**//c/*/ed*//e/*/db/*/bedd/*/eccebcbce/*///*ec/*/ad/*/cb//*cabcadebcee//*ba/*/",
//         "*//c*//de/*/ada/*/cc//*a//*ccb*////*dabecadea*//be/*/cba/*/d/*//*/cd//*da//*e*//",
//         "*///*//*/a/*/*///*/cccb//*c/*/a//*bdddebc*///*//*/eb//*//**//aee/*/*//aec/*/a//*",
//         "//*b/*/ab*//e/*/c//**//aab//*aaddcb*///*/cd/*/ecac/*///*ec//*//*dd//**//b/*/c*//",
//         "/*/ab//*c*////*/*//*/eaae//*/*/cb*//*//aebb*///*///*cee*//ca*//aba/*/b//*//*c*//",
//         "/*/b*//ddddcab*////*/*/cb*//eba*//d*////*/*/c/*/ccd/*/ab*//cbe*//bda//*cb//**//",
//         "cb*//ebedad/*/ed//**//a//*dcaeaecaa//*/*/dcacddbe//*//*/*/dcc*//a//*cacccdea//*",
//         "b*//b*///*/*//*//a/*/eac/*/b/*/ab//*/*/aa*//e//**//aac//*db//**//d/*/bd*///*///*",
//         "*//*////*d//*d//*d//**//*//a/*//*//*/d//*e*////*b*//b*//bd*//c//**//cdb/*/d*//",
//         "aaadddd/*/b//*//*beeddb/*///*//*cc*//abe//*c*///*/abca*//d//*dbaeebcddc//*dddc",
//         "bd*//b/*/bd//*bd/*/c*//dd//*e*//*//d//**//a//*cbae/*/ab*//e*//e*//dcaa/*//*/dc",
//         "ad//*abcbbb*////*b//*e/*/*//bb*////*/*/*//*//ba/*//*/dacdbcda/*/bdcbb*//*///*/",
//         "*////**////**////*b*//c*////*e//*cab*//dce/*/d*//ceaaaaa//**////*addd*///*/*//",
//         "//*cc/*/c/*/cc*//a/*/ac/*/a//*e*//bb/*/eae//*abb/*///*//*/*/c//*//*e//*da//*b/*/",
//         "*///*/ba/*/eaeaec/*/cd/*/dac//*aacc/*///*adcd//*adce//*bea/*/bea//*ba*//*//b*//",
//         "e/*/a*///*/ac*//*//*////*de*//de*//a*//ece//*dc//*dabae//*/*/ebcecdda//*de*//c",
//         "a*//eccb//*ebd/*//*/dc*//e/*///*//*/*/ce/*/*//b//*edbdba//*de//**//d*//ec/*/*//",
//         "a/*///*eec*///*/dd*////*//*/*//*///*aa//*d*///*/c*//d/*//*//*/c*//dcc//*ec*//c",
//         "d*//c/*/a/*//*/adb/*/a//**//b*///*///*cabecca/*/eec*//caeac/*/aa//*//*//*ddbbb",
//         "e*//ebca/*//*/cdc/*///**//*//bdbc*//ebdd/*/aa//*eaebbd*//c*//adbbeca*////**////*",
//         "cedc*///*/e//*d*///*///*//*e/*/cda/*//*///**////*e/*/c//*dac/*/a//*//**//e//*/*/",
//         "*///*/*//*//dced*//b*//b//*a//*//*d*//aab/*/dacccdc//*e//*//*edcc//*//*/*///**//",
//         "/*//*/*//*//ee//*eb//*cb//*ca/*///**//*///*/ed//*cccd//**////*e//*dbcdad//*c*//",
//         "//*bdeadcccddc//**//ebee*////*bb*////**//cac*////*c//*bbaca*//eeb*//c/*/aae*//",
//         "//*ecd//*cddc/*/cab/*/*//bb/*/c*///*/dab*//d*//cc/*///*ccde*//c//*be//*d*///*/",
//         "eb//*eabac/*/e//*d*//a/*//*/ca/*///**//a//**//a/*//*/e//*bb/*/cccdbedceb/*/d*//",
//         "*//aa//*eac//**//ea//*ee//*eb/*///*e*//*//beece//*/*///*e/*///*//*//*//*e/*/bd",
//         "//*/*/ae*//a*//a*//cdc*//bcc//*/*/c/*/b*//cdae//*dd*//bcbdeba*//b//**//a//*cbb",
//         "b*//d//*ace/*/a//*/*/*////*//*//**//*///*/de*//a//**///*///*d*////*//*cd//**//",
//         "*//bd//*//*d/*/*//e//*/*/*//*//c/*/c//*ca*//*//adaa/*/dc*//ddda//*c//*edccc/*/",
//         "ba*//a//*e//*ccda*//b//*c/*//*/dc/*/eaedb/*/adbed*//bda*////*d//*a*//*//*//cb//*",
//         "da*//dc/*///*b/*/cb/*/daa*//adddbd/*/be/*/b/*/b/*/c//*c*//ee//**//*//be//**//*//",
//         "eccd/*/cb//*/*/ab//*ba//*/*/bc/*/ebdec//*baeadb//*//*c*//bacc//*d/*/*//b*///*/",
//         "*////*ce//*a*////*bc//*/*//*/b//*/*/*//b//*//*eb/*/a*//*//dede/*/aebebc//*ba//*",
//         "/*/d//*//*d//*/*/cbcedae/*/b//*/*//*/*//eae/*/a*///*///*ca//*ab//*e/*/eebea/*/",
//         "a//*a*//ee//*/*/dd/*/ebe//*eaacda/*/*//c/*///*cd*///*/aa//**//aaecba/*/b//*bbe",
//         "//*d//*//*ccaa/*/c//*be//**///*/e*//de/*/cce//*//*//*abbdd/*///*cceebc//*//*dd",
//         "aa//*d//*//*ebc/*/ba//*bd//*/*///*//**//*////*dca/*//*/eeee/*/*////*a/*/c*//b*//",
//         "*//ca*///*/*//deb//*adb*//d//*dcbbeda*//bd/*/ad//*cdd/*/ee//*//*ecea//*/*/a//*",
//         "cadbbd/*/de/*///*//*//*//*//*//*bc*////*db*//bebdb//*/*/b//**////*/*/bc//*a*//",
//         "d//*bc*//eda*//aaac/*///*/*/db//*dca//*edd/*/a/*/ccad*//c//*aded/*/ee/*/eead/*/",
//         "*//bdaeda//*//**///*/b*//ddccbad*//ee*//ddcbcd/*/ab//*ec//*dd//*//*//*aaeddbac",
//         "c//*/*/decadeed*//a*//ca//*/*/e*//bd*///*/db*////*a/*/cabdaddbeadbdaaacb*//b//*",
//         "d/*/aee*//d/*/*///*/de*//de//*ab*///*/ccb/*/adbab*//c//*/*/e*//eee*//e/*//*///*",
//         "d/*/*//c//**//cd/*///*d/*/b/*/bba*//dc//**///*/baca*//ddbc*//deeaead//*bd*//dd",
//         "dbbdedece//*dceaa//*aeb/*/bdead//*ccbeb*////**//b//*d*//aecad//*a*////**//abeb"
//     ]
// ))
