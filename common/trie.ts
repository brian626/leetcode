export class TrieNode {
    private links: TrieNode[];
    static R: number = 26;
    private isEnd: boolean;

    constructor() {
        this.links = [];
        this.links.length = TrieNode.R;
        this.isEnd = false;
    }

    containsKey(c: string): boolean {
        return this.links[c.charCodeAt(0) - 'a'.charCodeAt(0)] != null;
    }

    get(c: string): TrieNode {
        return this.links[c.charCodeAt(0) - 'a'.charCodeAt(0)];
    }

    put(c: string, node: TrieNode): void {
        this.links[c.charCodeAt(0) - 'a'.charCodeAt(0)] = node;
    }

    setEnd(): void {
        this.isEnd = true;
    }

    getEnd(): boolean {
        return this.isEnd;
    }

    getLinks(): TrieNode[] {
        return this.links;
    }
}


export class Trie {
    private root: TrieNode;

    constructor() {
        this.root = new TrieNode();
    }

    insert(word: string): void {
        let node: TrieNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const currentChar: string = word.charAt(i);
            if (!node.containsKey(currentChar)) {
                node.put(currentChar, new TrieNode());
            }

            node = node.get(currentChar);
        }

        node.setEnd();
    }

    searchPrefix(word: string): TrieNode {
        let node: TrieNode = this.root;

        for (let i = 0; i < word.length; i++) {
            const currentChar: string = word.charAt(i);
            if (node.containsKey(currentChar)) {
                node = node.get(currentChar);
            }
            else {
                return null;
            }
        }

        return node;
    }

    search(word: string): boolean {
        let node: TrieNode = this.searchPrefix(word);

        return node != null && node.getEnd();
    }

    startsWith(prefix: string): boolean {
        let node: TrieNode = this.searchPrefix(prefix);

        return node != null;
    }
}

// let trie: Trie = new Trie();
// trie.insert("apple");
// console.log(trie.search("apple"));   // return True
// console.log(trie.search("app"));     // return False
// console.log(trie.startsWith("app")); // return True
// trie.insert("app");
// console.log(trie.search("app"));     // return True
