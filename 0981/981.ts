// 981. Time Based Key-Value Store

// Create a timebased key-value store class TimeMap, that supports two operations.

// 1. set(string key, string value, int timestamp)

// Stores the key and value, along with the given timestamp.

// 2. get(string key, int timestamp)

// Returns a value such that set(key, value, timestamp_prev) was called previously, with timestamp_prev <= timestamp.
// If there are multiple such values, it returns the one with the largest timestamp_prev.
// If there are no values, it returns the empty string ("").


// Example 1:

// Input: inputs = ["TimeMap","set","get","get","set","get","get"], inputs = [[],["foo","bar",1],["foo",1],["foo",3],["foo","bar2",4],["foo",4],["foo",5]]
// Output: [null,null,"bar","bar",null,"bar2","bar2"]
// Explanation:
// TimeMap kv;
// kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
// kv.get("foo", 1);  // output "bar"
// kv.get("foo", 3); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
// kv.set("foo", "bar2", 4);
// kv.get("foo", 4); // output "bar2"
// kv.get("foo", 5); //output "bar2"

// Example 2:

// Input: inputs = ["TimeMap","set","set","get","get","get","get","get"], inputs = [[],["love","high",10],["love","low",20],["love",5],["love",10],["love",15],["love",20],["love",25]]
// Output: [null,null,null,"","high","high","low","low"]


// Note:

// All key/value strings are lowercase.
// All key/value strings have length in the range [1, 100]
// The timestamps for all TimeMap.set operations are strictly increasing.
// 1 <= timestamp <= 10^7
// TimeMap.set and TimeMap.get functions will be called a total of 120000 times (combined) per test case.

class TimeMap {
    constructor() {
        this.timeMap = new Map<string, [[string, number]]>()
    }

    set(key: string, value: string, timestamp: number): void {
        if (this.timeMap.has(key)) {
            let list = this.timeMap.get(key)
            list.push([value, timestamp])
            this.timeMap.set(key, list)
        }
        else {
            this.timeMap.set(key, [[value, timestamp]])
        }
    }

    get(key: string, timestamp: number): string {
        if (this.timeMap.size == 0) { return "" }

        const list = this.timeMap.get(key)

        if (list === undefined) { return "" }

        let index = 0
        while (index < list.length && list[index][1] <= timestamp) {
            index++
        }
        index--

        if (index == list.length || index < 0) {
            return ""
        }
        else {
            return list[index][0]
        }
    }

    timeMap: Map<string, [[string, number]]>
}

/**
 * Your TimeMap object will be instantiated and called as such:
 * var obj = new TimeMap()
 * obj.set(key,value,timestamp)
 * var param_2 = obj.get(key,timestamp)
 */

let kv: TimeMap = new TimeMap
kv.set("foo", "bar", 1); // store the key "foo" and value "bar" along with timestamp = 1
console.log(kv.get("foo", 1));  // output "bar"
console.log(kv.get("foo", 3)); // output "bar" since there is no value corresponding to foo at timestamp 3 and timestamp 2, then the only value is at timestamp 1 ie "bar"
kv.set("foo", "bar2", 4);
console.log(kv.get("foo", 4)); // output "bar2"
console.log(kv.get("foo", 5)); // output "bar2"
console.log(kv.get("foot", 5)); // output ""
console.log(kv.get("foo", 0)); // output "bar2"
