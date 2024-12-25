// Open the Lock

// You have a lock in front of you with 4 circular wheels. Each wheel has 10 slots:
// '0', '1', '2', '3', '4', '5', '6', '7', '8', '9'. The wheels can rotate freely
// and wrap around: for example we can turn '9' to be '0', or '0' to be '9'. Each
// move consists of turning one wheel one slot.

// The lock initially starts at '0000', a string representing the state of the 4 wheels.

// You are given a list of deadends dead ends, meaning if the lock displays any of
// these codes, the wheels of the lock will stop turning and you will be unable to open it.

// Given a target representing the value of the wheels that will unlock the lock,
// return the minimum total number of turns required to open the lock, or -1 if it is impossible.


// Example 1:

// Input: deadends = ["0201","0101","0102","1212","2002"], target = "0202"
// Output: 6
// Explanation:
// A sequence of valid moves would be "0000" -> "1000" -> "1100" -> "1200" -> "1201" -> "1202" -> "0202".
// Note that a sequence like "0000" -> "0001" -> "0002" -> "0102" -> "0202" would be invalid,
// because the wheels of the lock become stuck after the display becomes the dead end "0102".

// Example 2:

// Input: deadends = ["8888"], target = "0009"
// Output: 1
// Explanation:
// We can turn the last wheel in reverse to move from "0000" -> "0009".

// Example 3:

// Input: deadends = ["8887","8889","8878","8898","8788","8988","7888","9888"], target = "8888"
// Output: -1
// Explanation:
// We can't reach the target without getting stuck.

// Example 4:

// Input: deadends = ["0000"], target = "8888"
// Output: -1


// Constraints:

// 1 <= deadends.length <= 500
// deadends[i].length == 4
// target.length == 4
// target will not be in the list deadends.
// target and deadends[i] consist of digits only.

// We can think of this problem as a shortest path problem on a graph: there are `10000`
// nodes (strings `'0000'` to `'9999'`), and there is an edge between two nodes if they
// differ in one digit, that digit differs by 1 (wrapping around, so `'0'` and `'9'`
// differ by 1), and if *both* nodes are not in `deadends`.

import { Vertex, Graph } from './graph';

function padStart(num: number, size: number): string {
    let numStr = num.toString();
    while (numStr.length < size) { numStr = "0" + numStr }

    return numStr;
}

function openLock(deadends: string[], target: string): number {
    if (deadends.indexOf('0000') != -1) { return -1 }

    let graph: Graph = new Graph()

    // Add vertices
    console.log(`adding vertices`)
    for (let i = 0; i < 10000; i++) { graph.addVertex(new Vertex(padStart(i, 4))) }
    console.log(`vertices added`)

    // Add edges - defer until search?
    console.log(`adding edges`)
    for (let i = 0; i < 10000; i++) {
        const iStr: string = padStart(i, 4)
        if (deadends.indexOf(iStr) !== -1) { continue }

        let d: number[] = iStr.split('').map(x => parseInt(x, 10))

        let neighbors: string[] = []
        if (iStr[0] > '0') { neighbors.push([(d[0] - 1).toString(), iStr[1], iStr[2], iStr[3]].join(''))}
        else               { neighbors.push(['9',                   iStr[1], iStr[2], iStr[3]].join(''))}
        if (iStr[0] < '9') { neighbors.push([(d[0] + 1).toString(), iStr[1], iStr[2], iStr[3]].join(''))}
        else               { neighbors.push(['0',                   iStr[1], iStr[2], iStr[3]].join(''))}

        if (iStr[1] > '0') { neighbors.push([iStr[0], (d[1] - 1).toString(), iStr[2], iStr[3]].join(''))}
        else               { neighbors.push([iStr[0], '9',                   iStr[2], iStr[3]].join(''))}
        if (iStr[1] < '9') { neighbors.push([iStr[0], (d[1] + 1).toString(), iStr[2], iStr[3]].join(''))}
        else               { neighbors.push([iStr[0], '0',                   iStr[2], iStr[3]].join(''))}

        if (iStr[2] > '0') { neighbors.push([iStr[0], iStr[1], (d[2] - 1).toString(), iStr[3]].join(''))}
        else               { neighbors.push([iStr[0], iStr[1], '9',                   iStr[3]].join(''))}
        if (iStr[2] < '9') { neighbors.push([iStr[0], iStr[1], (d[2] + 1).toString(), iStr[3]].join(''))}
        else               { neighbors.push([iStr[0], iStr[1], '0',                   iStr[3]].join(''))}

        if (iStr[3] > '0') { neighbors.push([iStr[0], iStr[1], iStr[2], (d[3] - 1).toString()].join(''))}
        else               { neighbors.push([iStr[0], iStr[1], iStr[2], '9'                  ].join(''))}
        if (iStr[3] < '9') { neighbors.push([iStr[0], iStr[1], iStr[2], (d[3] + 1).toString()].join(''))}
        else               { neighbors.push([iStr[0], iStr[1], iStr[2], '0'                  ].join(''))}

        neighbors.forEach(n => { if (deadends.indexOf(n) === -1) { graph.addAnEdge(iStr, n) } })
    }
    console.log(`edges added`)

    console.log(`searching`)
    let numMoves: number = graph.ids('0000', target)
    console.log(`done`)

    return numMoves
};

console.log(openLock(["0201","0101","0102","1212","2002"], "0202"))
// Output: 6

// console.log(openLock(["8888"], "0009"))
// Output: 1

// console.log(openLock(["8887","8889","8878","8898","8788","8988","7888","9888"], "8888"))
// Output: -1

// console.log(openLock(["0000"], "8888"))
// Output: -1

// console.log(openLock(["2221","2223","2212","2232","2122","2322","1222","3222"], "2222"))
