
import { Trie } from '../common/trie';

/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

let trie: Trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   // return True
// console.log(trie.search("app"));     // return False
// console.log(trie.startsWith("app")); // return True
// trie.insert("app");
// trie.insert("appl");
// trie.insert("ap");
// trie.insert("a");
// console.log(trie.search("app"));     // return True

// trie.insert("a");
// console.log(trie.search("a"));     // return True
console.log(trie.startsWith("a"));     // return True

// trie.insert("ab");
// console.log(trie.search("a"));     // return false
// console.log(trie.startsWith("a"));     // return true
