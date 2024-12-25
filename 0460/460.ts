// 460. LFU Cache

// Design and implement a data structure for a Least Frequently Used (LFU) cache.

// Implement the LFUCache class:

// LFUCache(int capacity) Initializes the object with the capacity of the data structure.

// int get(int key) Gets the value of the key if the key exists in the cache. Otherwise, returns -1.

// void put(int key, int value) Update the value of the key if present, or inserts the key if
// not already present. When the cache reaches its capacity, it should invalidate and remove
// the least frequently used key before inserting a new item. For this problem, when there is a
// tie (i.e., two or more keys with the same frequency), the least recently used key would be invalidated.
// To determine the least frequently used key, a use counter is maintained for each key in the cache.
// The key with the smallest use counter is the least frequently used key.

// When a key is first inserted into the cache, its use counter is set to 1 (due to the put operation).
// The use counter for a key in the cache is incremented either a get or put operation is called on it.


// Example 1:

// Input
// ["LFUCache", "put", "put", "get", "put", "get", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [3], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, 3, null, -1, 3, 4]

// Explanation
// // cnt(x) = the use counter for key x
// // cache=[] will show the last used order for tiebreakers (leftmost element is  most recent)
// LFUCache lfu = new LFUCache(2);
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// lfu.get(1);      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// lfu.get(2);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// lfu.get(1);      // return -1 (not found)
// lfu.get(3);      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// lfu.get(4);      // return 4
//                  // cache=[3,4], cnt(4)=2, cnt(3)=3


// Constraints:

// 0 <= capacity, key, value <= 10^4
// At most 10^5 calls will be made to get and put.


// Follow up: Could you do both operations in O(1) time complexity?

class LFUCache {
    constructor(capacity: number) {
        this.capacity = capacity
        this.cache = new Map<number, [number, number]>()
        this.lru = []
    }

    // If key in the LRU list, move it to the front. Otherwise, add it.
    updateLRU(key: number): void {
        log(`updateLRU(${key}) called with lruKeys = [${this.lru}]`)

        let lruIndex = this.lru.indexOf(key)
        if (lruIndex == -1) {
            log(`  key not found in lruKeys`)

            if (this.lru.length == this.capacity) {
                log(`  lruKeys is full, removing last element`)
                this.lru.pop()
            }
        }
        else {
            log(`  key found in lruKeys, removing it`)
            this.lru.splice(lruIndex, 1)
        }

        this.lru.unshift(key)

        log(`  updated lruKeys to [${this.lru}]`)
    }

    deleteLRU(key: number): void {
        log(`deleteLRU(${key}) called with lruKeys = [${this.lru}]`)

        let lruIndex = this.lru.indexOf(key)
        if (lruIndex == -1) {
            log(`  key not found in lruKeys`)
        }
        else {
            log(`  key found in lruKeys, removing it`)
            this.lru.splice(lruIndex, 1)
        }

        log(`  updated lruKeys to [${this.lru}]`)
    }

    get(key: number): number {
        log(`get(${key})`)
        if (this.capacity == 0) { return -1 }

        if (this.cache.has(key)) {
            log(`  cache hit`)
            let [value, useCount] = this.cache.get(key)
            this.cache.set(key,[value, ++useCount])

            this.updateLRU(key)

            return value
        }
        else {
            log(`  cache miss`)
            return -1
        }
    }

    put(key: number, value: number): void {
        log(`put(${key},${value})`)
        if (this.capacity == 0) { return }

        if (this.cache.has(key)) {
            log(`  entry exists, updating value and useCount`)
            let [_value, useCount] = this.cache.get(key)
            this.cache.set(key,[value, ++useCount])
        }
        else {
            if (this.cache.size < this.capacity) {
                log(`  new entry, cache has capacity, setting value and useCount`)
                this.cache.set(key,[value,1])
            }
            else {
                log(`  new entry, cache is full, evicting LRU before setting value and useCount`)
                log(`  lruKeys: ${this.lru}`)
                // Need to evict a cache element. Look for the least-used element, and use lru
                // as a tiebreaker.
                let leastUsedKeys: number[] = []
                let leastUsedCount = 999999
                for (let [key, [_value, useCount]] of this.cache.entries()) {
                    if (useCount < leastUsedCount) {
                        leastUsedCount = useCount
                        leastUsedKeys = [key]
                    }
                    else if (useCount == leastUsedCount) {
                        leastUsedKeys.push(key)
                    }
                }

                if (leastUsedKeys.length == 1) {
                    log(`  key ${leastUsedKeys[0]} has the lowest useCount`)
                    this.cache.delete(leastUsedKeys[0])
                    this.deleteLRU(leastUsedKeys[0])
                }
                else {
                    log(`  keys ${leastUsedKeys} have the lowest useCount`)
                    let maxLruIndex = -1
                    let maxLruKey = -1
                    for (let i = 0; i < leastUsedKeys.length; i++) {
                        if (this.lru.indexOf(leastUsedKeys[i]) > maxLruIndex) {
                            maxLruIndex = this.lru.indexOf(leastUsedKeys[i])
                            maxLruKey = leastUsedKeys[i]
                        }
                    }
                    log(`  evicting ${maxLruKey}`)
                    this.cache.delete(maxLruKey)
                    this.deleteLRU(maxLruKey)
                }

                this.cache.set(key,[value,1])
            }
        }

        this.updateLRU(key)
    }

    cache: Map<number,[number, number]>
    capacity: number
    lru: number[]
}

let DEBUG_460: boolean = true
function log(s: string): void {
    if (DEBUG_460) {
        console.log(s)
    }
}

/**
 * Your LFUCache object will be instantiated and called as such:
 * var obj = new LFUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

// let lfu: LFUCache = new LFUCache(2)
// lfu.put(1, 1);   // cache=[1,_], cnt(1)=1
// lfu.put(2, 2);   // cache=[2,1], cnt(2)=1, cnt(1)=1
// console.log(lfu.get(1));      // return 1
//                  // cache=[1,2], cnt(2)=1, cnt(1)=2
// lfu.put(3, 3);   // 2 is the LFU key because cnt(2)=1 is the smallest, invalidate 2.
//                  // cache=[3,1], cnt(3)=1, cnt(1)=2
// console.log(lfu.get(2));      // return -1 (not found)
// console.log(lfu.get(3));      // return 3
//                  // cache=[3,1], cnt(3)=2, cnt(1)=2
// lfu.put(4, 4);   // Both 1 and 3 have the same cnt, but 1 is LRU, invalidate 1.
//                  // cache=[4,3], cnt(4)=1, cnt(3)=2
// console.log(lfu.get(1));      // return -1 (not found)
// console.log(lfu.get(3));      // return 3
//                  // cache=[3,4], cnt(4)=1, cnt(3)=3
// console.log(lfu.get(4));      // return 4
//                  // cache=[3,4], cnt(4)=2, cnt(3)=3

// let lfu: LFUCache = new LFUCache(2)
// lfu.put(3,1)
// lfu.put(2,1)
// lfu.put(2,2)
// lfu.put(4,4)
// console.log(lfu.get(2)) // output 2

// let lfu: LFUCache = new LFUCache(0)
// lfu.put(0,0)
// console.log(lfu.get(0)) // output -1

let lfu: LFUCache = new LFUCache(10)
lfu.put(10,13)
lfu.put(3,17)
lfu.put(6,11)
lfu.put(10,5)
lfu.put(9,10)
console.log(lfu.get(13)) // -1
lfu.put(2,19)
console.log(lfu.get(2)) // 19
console.log(lfu.get(3)) // 17
lfu.put(5,25)
console.log(lfu.get(8)) // -1
lfu.put(9,22)
lfu.put(5,5)
lfu.put(1,30)
console.log(lfu.get(11)) // -1
lfu.put(9,12)
console.log(lfu.get(7)) // -1
console.log(lfu.get(5)) // 5
console.log(lfu.get(8)) // -1
console.log(lfu.get(9)) // 12
lfu.put(4,30)
lfu.put(9,3)
console.log(lfu.get(9)) // 3
console.log(lfu.get(10)) // 5
console.log(lfu.get(10)) // 5
lfu.put(6,14)
lfu.put(3,1)
console.log(lfu.get(3)) // 1
lfu.put(10,11)
console.log(lfu.get(8)) // -1
lfu.put(2,14)
console.log(lfu.get(1)) // 30
console.log(lfu.get(5)) // 5
console.log(lfu.get(4)) // 30
lfu.put(11,4)
lfu.put(12,24)
lfu.put(5,18)
console.log(lfu.get(8)) // -1
lfu.put(7,23)
console.log(lfu.get(8)) // -1
console.log(lfu.get(12)) // 24
lfu.put(3,27)
lfu.put(2,12)
console.log(lfu.get(5)) // 18
lfu.put(2,9)
lfu.put(13,4)
lfu.put(8,18)
lfu.put(1,7)
console.log(lfu.get(6)) // 14
lfu.put(9,29)
lfu.put(8,21)
console.log(lfu.get(5)) // 18
lfu.put(6,30)
lfu.put(1,12)
console.log(lfu.get(10)) // 11
lfu.put(4,15)
lfu.put(7,22)
lfu.put(11,26)
lfu.put(8,17)
lfu.put(9,29)
console.log(lfu.get(5)) // 18
lfu.put(3,4)
lfu.put(11,30)
console.log(lfu.get(12)) // -1 <------ 24???
lfu.put(4,29)
console.log(lfu.get(3)) // 4
console.log(lfu.get(9)) // 29
console.log(lfu.get(6)) // 30
lfu.put(3,4)
console.log(lfu.get(1)) // 12
console.log(lfu.get(10)) // 11
lfu.put(3,29)
lfu.put(10,28)
lfu.put(1,20)
lfu.put(11,13)
console.log(lfu.get(3)) // 29
lfu.put(3,12)
lfu.put(3,8)
lfu.put(10,9)
lfu.put(3,26)
console.log(lfu.get(8)) // 17
console.log(lfu.get(7)) // -1
console.log(lfu.get(5)) // 18
lfu.put(13,17)
lfu.put(2,27)
lfu.put(11,15)
console.log(lfu.get(12)) // -1
lfu.put(9,19)
lfu.put(2,15)
lfu.put(3,16)
console.log(lfu.get(1)) // 20
lfu.put(12,17)
lfu.put(9,1)
lfu.put(6,19)
console.log(lfu.get(4)) // 29
console.log(lfu.get(5)) // 18
console.log(lfu.get(5)) // 18
lfu.put(8,1)
lfu.put(11,7)
lfu.put(5,2)
lfu.put(9,28)
console.log(lfu.get(1)) // 20
lfu.put(2,2)
lfu.put(7,4)
lfu.put(4,22)
lfu.put(7,24)
lfu.put(9,26)
lfu.put(13,28)
lfu.put(11,26)


// let lfu: LFUCache = new LFUCache(2)
// lfu.put(2,1)
// lfu.put(3,2)
// console.log(lfu.get(3)) // 2
// console.log(lfu.get(2)) // 1
// lfu.put(4,3)
// console.log(lfu.get(2)) // 1
// console.log(lfu.get(3)) // -1
// console.log(lfu.get(4)) // 3
