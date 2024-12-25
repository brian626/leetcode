// 677. Map Sum Pairs

// Implement the MapSum class:

// MapSum() Initializes the MapSum object.
// void insert(String key, int val) Inserts the key-val pair into the map. If the key
//   already existed, the original key-value pair will be overridden to the new one.
// int sum(string prefix) Returns the sum of all the pairs' value whose key starts with the prefix.


// Example 1:

// Input
// ["MapSum", "insert", "sum", "insert", "sum"]
// [[], ["apple", 3], ["ap"], ["app", 2], ["ap"]]
// Output
// [null, null, 3, null, 5]

// Explanation
// MapSum mapSum = new MapSum();
// mapSum.insert("apple", 3);
// mapSum.sum("ap");           // return 3 (apple = 3)
// mapSum.insert("app", 2);
// mapSum.sum("ap");           // return 5 (apple + app = 3 + 2 = 5)


// Constraints:

// 1 <= key.length, prefix.length <= 50
// key and prefix consist of only lowercase English letters.
// 1 <= val <= 1000
// At most 50 calls will be made to insert and sum.

class MapSum {
    constructor() {
        this.map = new Map()
    }

    insert(key: string, val: number): void {
        this.map.set(key, val)
    }

    sum(prefix: string): number {
        let sum = 0
        Array.from(this.map.keys()).forEach(key => {
            if (prefix === key.slice(0,prefix.length)) {
                sum += this.map.get(key)
            }
        })

        return sum
    }

    map: Map<string, number>
}

/**
 * Your MapSum object will be instantiated and called as such:
 * var obj = new MapSum()
 * obj.insert(key,val)
 * var param_2 = obj.sum(prefix)
 */

let mapSum: MapSum = new MapSum();
mapSum.insert("apple", 3);
console.log(mapSum.sum("ap"))           // return 3 (apple = 3)
mapSum.insert("app", 2);
console.log(mapSum.sum("ap"))           // return 5 (apple + app = 3 + 2 = 5)
