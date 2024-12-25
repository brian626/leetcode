// 146. LRU Cache

// Design a data structure that follows the constraints of a Least Recently Used (LRU) cache.

// Implement the LRUCache class:

// LRUCache(int capacity) Initialize the LRU cache with positive size capacity.
// int get(int key) Return the value of the key if the key exists, otherwise return -1.
// void put(int key, int value) Update the value of the key if the key exists.
//   Otherwise, add the key-value pair to the cache. If the number of keys exceeds the capacity
//   from this operation, evict the least recently used key.

// Follow up:
// Could you do get and put in O(1) time complexity?


// Example 1:

// Input
// ["LRUCache", "put", "put", "get", "put", "get", "put", "get", "get", "get"]
// [[2], [1, 1], [2, 2], [1], [3, 3], [2], [4, 4], [1], [3], [4]]
// Output
// [null, null, null, 1, null, -1, null, -1, 3, 4]

// Explanation
// LRUCache lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// lRUCache.get(1);    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// lRUCache.get(2);    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// lRUCache.get(1);    // return -1 (not found)
// lRUCache.get(3);    // return 3
// lRUCache.get(4);    // return 4


// Constraints:

// 1 <= capacity <= 3000
// 0 <= key <= 3000
// 0 <= value <= 10^4
// At most 3 * 10^4 calls will be made to get and put.

class LRUCache {
    constructor(capacity: number) {
        this.cache = new Map<number, number>()
        this.capacity = capacity
        this.recency = []
    }

    get(key: number): number {
        if (this.cache.has(key)) {
            // Update recency information
            this.recency.splice(this.recency.indexOf(key), 1)
            this.recency.unshift(key)

            return this.cache.get(key)
        }
        else {
            return -1
        }
    }

    put(key: number, value: number): void {
        if (!this.cache.has(key) && this.cache.size == this.capacity) {
            // Evict the least-recently-used key
            this.cache.delete(this.recency.pop())
        }

        this.cache.set(key, value)

        // Update recency information
        if (this.recency.indexOf(key) != -1) {
            this.recency.splice(this.recency.indexOf(key), 1)
        }
        this.recency.unshift(key)
    }

    cache: Map<number, number>
    capacity: number
    recency: number[]
}

/**
 * Your LRUCache object will be instantiated and called as such:
 * var obj = new LRUCache(capacity)
 * var param_1 = obj.get(key)
 * obj.put(key,value)
 */

let lRUCache: LRUCache

// lRUCache = new LRUCache(2);
// lRUCache.put(1, 1); // cache is {1=1}
// lRUCache.put(2, 2); // cache is {1=1, 2=2}
// console.log(lRUCache.get(1));    // return 1
// lRUCache.put(3, 3); // LRU key was 2, evicts key 2, cache is {1=1, 3=3}
// console.log(lRUCache.get(2));    // returns -1 (not found)
// lRUCache.put(4, 4); // LRU key was 1, evicts key 1, cache is {4=4, 3=3}
// console.log(lRUCache.get(1));    // return -1 (not found)
// console.log(lRUCache.get(3));    // return 3
// console.log(lRUCache.get(4));    // return 4

lRUCache = new LRUCache(2);
console.log(lRUCache.get(2));    // return -1 (not found)
lRUCache.put(2,6)
console.log(lRUCache.get(1));    // return -1 (not found)
lRUCache.put(1,5)
lRUCache.put(1,2)
console.log(lRUCache.get(1));    // return 2
console.log(lRUCache.get(2));    // return 6
