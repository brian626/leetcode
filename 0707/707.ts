// 707. Design Linked List

// Design your implementation of the linked list. You can choose to use a singly or doubly linked list.
// A node in a singly linked list should have two attributes: val and next. val is the value of the current node,
// and next is a pointer/reference to the next node.
// If you want to use the doubly linked list, you will need one more attribute prev to indicate the previous node
// in the linked list. Assume all nodes in the linked list are 0-indexed.

// Implement the MyLinkedList class:

// MyLinkedList() Initializes the MyLinkedList object.
// int get(int index) Get the value of the indexth node in the linked list. If the index is invalid, return -1.
// void addAtHead(int val) Add a node of value val before the first element of the linked list. After the insertion,
//   the new node will be the first node of the linked list.
// void addAtTail(int val) Append a node of value val as the last element of the linked list.
// void addAtIndex(int index, int val) Add a node of value val before the indexth node in the linked list. If index
//   equals the length of the linked list, the node will be appended to the end of the linked list. If index is greater
//   than the length, the node will not be inserted.
// void deleteAtIndex(int index) Delete the indexth node in the linked list, if the index is valid.


// Example 1:

// Input
// ["MyLinkedList", "addAtHead", "addAtTail", "addAtIndex", "get", "deleteAtIndex", "get"]
// [[], [1], [3], [1, 2], [1], [1], [1]]
// Output
// [null, null, null, null, 2, null, 3]

// Explanation
// MyLinkedList myLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// myLinkedList.get(1);              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// myLinkedList.get(1);              // return 3


// Constraints:

// 0 <= index, val <= 1000
// Please do not use the built-in LinkedList library.
// At most 2000 calls will be made to get, addAtHead, addAtTail, addAtIndex and deleteAtIndex.

class MyNode {
    constructor(val: number, prev: MyNode, next: MyNode) {
        this.val = val;
        this.prev = prev;
        this.next = next;
    }

    val: number;
    prev: MyNode;
    next: MyNode;
}

class MyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    get(index: number): number {
        let curNode: MyNode = this.head;
        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (curNode === null) {
                return -1;
            }
        }

        return curNode.val;
    }

    addAtHead(val: number): void {
        // console.log(`addAtHead(${val})`);
        if (this.head === null) {
            this.head = new MyNode(val, null, null);
            this.tail = this.head;
        }
        else {
            const newNode: MyNode = new MyNode(val, null, this.head);
            this.head.prev = newNode;
            this.head = newNode;
        }

        this.printList();
    }

    addAtTail(val: number): void {
        // console.log(`addAtTail(${val})`);
        if (this.head === null) {
            this.head = new MyNode(val, null, null);
            this.tail = this.head;
        }
        else {
            const newNode: MyNode = new MyNode(val, this.tail, null);
            this.tail.next = newNode;
            this.tail = newNode;
        }

        this.printList();
    }

    addAtIndex(index: number, val: number): void {
        // console.log(`addAtIndex(${index}, ${val})`);
        if (index === 0)                  { return this.addAtHead(val); }
        else if (index === this.length()) { return this.addAtTail(val); }

        let curNode: MyNode = this.head;
        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (curNode === null) {
                return;
            }
        }

        const newNode: MyNode = new MyNode(val, curNode.prev, curNode);
        curNode.prev.next = newNode;
        curNode.prev = newNode;

        this.printList();
    }

    deleteAtIndex(index: number): void {
        // console.log(`deleteAtIndex(${index})`);
        let curNode: MyNode = this.head;
        for (let i = 0; i < index; i++) {
            curNode = curNode.next;
            if (curNode === null) {
                return;
            }
        }

        const prevNode: MyNode = curNode.prev;
        const nextNode: MyNode = curNode.next;
        if (prevNode) { prevNode.next = nextNode; }
        else          { this.head = curNode.next; }
        if (nextNode) { nextNode.prev = prevNode; }
        else          { this.tail = prevNode; }

        this.printList();
    }

    length(): number {
        let curNode: MyNode = this.head;
        let length: number = 0;
        while (curNode !== null) {
            length++;
            curNode = curNode.next;
        }

        return length;
    }

    printList(): void {
        // let output: string = ''; // list: ';
        // let curNode: MyNode = this.head;
        // while (curNode) {
        //     output += `${curNode.val},`;
        //     curNode = curNode.next;
        // }
        // console.log(output.slice(0, output.length - 1)); // + '\n');
    }

    head: MyNode;
    tail: MyNode;
}

/**
 * Your MyLinkedList object will be instantiated and called as such:
 * var obj = new MyLinkedList()
 * var param_1 = obj.get(index)
 * obj.addAtHead(val)
 * obj.addAtTail(val)
 * obj.addAtIndex(index,val)
 * obj.deleteAtIndex(index)
 */

let myLinkedList: MyLinkedList = new MyLinkedList();
// myLinkedList.addAtHead(1);
// myLinkedList.addAtTail(3);
// myLinkedList.addAtIndex(1, 2);    // linked list becomes 1->2->3
// console.log(myLinkedList.get(1));              // return 2
// myLinkedList.deleteAtIndex(1);    // now the linked list is 1->3
// console.log(myLinkedList.get(1));              // return 3

// myLinkedList.addAtHead(1);
// myLinkedList.deleteAtIndex(0);

// myLinkedList.addAtHead(7); // 7
// myLinkedList.addAtHead(2); // 2->7
// myLinkedList.addAtHead(1); // 1->2->7
// myLinkedList.addAtIndex(3,0); // 1->2->7->0
// myLinkedList.deleteAtIndex(2); // 1->2->0
// myLinkedList.addAtHead(6); // 6->1->2
// myLinkedList.addAtTail(4); // 6->1->2->4
// console.log(myLinkedList.get(4)); // -1
// myLinkedList.addAtHead(4); // 4->6->1->2->4
// myLinkedList.addAtIndex(5,0);
// myLinkedList.addAtHead(6);

output:   [null,null,null,null,null,null,null,null,null,null,null,61,null,null,61,null,null,null,null,null,null,85,null,null,37,null,null,null,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,39,55,null,null,null,null,null,31,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,6,47,null,55,null,null,null,null,null,null,null,85,null,null,null,null,89,null,85,null,null,59,null,null]

expected: [null,null,null,null,null,null,null,null,null,null,null,61,null,null,61,null,null,null,null,null,null,85,null,null,37,null,null,null,null,null,null,null,null,23,null,null,null,null,null,null,null,null,null,null,-1,95,null,null,null,null,null,31,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,8,null,null,null,null,null,null,null,null,null,6,47,null,23,null,null,null,null,null,null,null,93,null,null,null,null,48,null,93,null,null,59,null,null]
myLinkedList.addAtHead(38);       // 38
myLinkedList.addAtTail(66);       // 38,66
myLinkedList.addAtTail(61);       // 38,66,61
myLinkedList.addAtTail(76);       // 38,66,61,76
myLinkedList.addAtTail(26);       // 38,66,61,76,26
myLinkedList.addAtTail(37);       // 38,66,61,76,26,37
myLinkedList.addAtTail(8);        // 38,66,61,76,26,37,8
myLinkedList.deleteAtIndex(5);    // 38,66,61,76,26,8
myLinkedList.addAtHead(4);        // 4,38,66,61,76,26,8
myLinkedList.addAtHead(45);       // 45,4,38,66,61,76,26,8
console.log(myLinkedList.get(4)); // 61
myLinkedList.addAtTail(85); // 45,4,38,66,61,76,26,8,85
myLinkedList.addAtHead(37); // 37,45,4,38,66,61,76,26,8,85
console.log(myLinkedList.get(5)); // 61
myLinkedList.addAtTail(93); // 37,45,4,38,66,61,76,26,8,85,93
myLinkedList.addAtIndex(10, 23); // 37,45,4,38,66,61,76,26,8,85,23,93
myLinkedList.addAtTail(21); // 37,45,4,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtHead(52); // 52,37,45,4,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtHead(15); // 15,52,37,45,4,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtHead(47); // 47,15,52,37,45,4,38,66,61,76,26,8,85,23,93,21
console.log(myLinkedList.get(12)); // 85
myLinkedList.addAtIndex(6, 24); // 47,15,52,37,45,4,24,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtHead(64); // 64,47,15,52,37,45,4,24,38,66,61,76,26,8,85,23,93,21
console.log(myLinkedList.get(4)); // 37
myLinkedList.addAtHead(31); // 31,64,47,15,52,37,45,4,24,38,66,61,76,26,8,85,23,93,21
myLinkedList.deleteAtIndex(6); // 31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtHead(40); // 40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21
myLinkedList.addAtTail(17); // 40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,17
myLinkedList.addAtTail(15); // 40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,17,15
myLinkedList.addAtIndex(19, 2); // 40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,2,17,15
myLinkedList.addAtTail(11); // 40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,2,17,15,11
myLinkedList.addAtHead(86); // 86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,2,17,15,11
console.log(myLinkedList.get(17)); // 23
myLinkedList.addAtTail(55);     // 86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,8,85,23,93,21,2,17,15,11,55
myLinkedList.deleteAtIndex(15); // 86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,85,23,93,21,2,17,15,11,55
myLinkedList.addAtIndex(14, 95); // 86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,15,11,55
myLinkedList.deleteAtIndex(22); // 86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55
myLinkedList.addAtHead(66); // 66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55
myLinkedList.addAtTail(95); // 66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55,95
myLinkedList.addAtHead(8); // 8,66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55,95
myLinkedList.addAtHead(47); // 47,8,66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55,95
myLinkedList.addAtTail(23); // 47,8,66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55,95,23
myLinkedList.addAtTail(39); // 47,8,66,86,40,31,64,47,15,52,37,4,24,38,66,61,76,26,95,85,23,93,21,2,17,11,55,95,23,39
console.log(myLinkedList.get(30)); // -1
console.log(myLinkedList.get(27)); // 95
// myLinkedList.addAtHead(0);
// myLinkedList.addAtTail(99);
// myLinkedList.addAtTail(45);
// myLinkedList.addAtTail(4);
// myLinkedList.addAtIndex(9, 11);
// myLinkedList.get(6);
// myLinkedList.addAtHead(81);
// myLinkedList.addAtIndex(18, 32);
// myLinkedList.addAtHead(20);
// myLinkedList.addAtTail(13);
// myLinkedList.addAtTail(42);
// myLinkedList.addAtIndex(37, 91);
// myLinkedList.deleteAtIndex(36);
// myLinkedList.addAtIndex(10, 37);
// myLinkedList.addAtHead(96);
// myLinkedList.addAtHead(57);
// myLinkedList.deleteAtIndex(20);
// myLinkedList.addAtTail(89);
// myLinkedList.deleteAtIndex(18);
// myLinkedList.addAtIndex(41, 5);
// myLinkedList.addAtTail(23);
// myLinkedList.addAtHead(75);
// myLinkedList.get(7);
// myLinkedList.addAtIndex(25, 51);
// myLinkedList.addAtTail(48);
// myLinkedList.addAtHead(46);
// myLinkedList.addAtHead(29);
// myLinkedList.addAtHead(85);
// myLinkedList.addAtHead(82);
// myLinkedList.addAtHead(6);
// myLinkedList.addAtHead(38);
// myLinkedList.deleteAtIndex(14);
// myLinkedList.get(1);
// myLinkedList.get(12);
// myLinkedList.addAtHead(42);
// myLinkedList.get(42);
// myLinkedList.addAtTail(83);
// myLinkedList.addAtTail(13);
// myLinkedList.addAtIndex(14, 20);
// myLinkedList.addAtIndex(17, 34);
// myLinkedList.addAtHead(36);
// myLinkedList.addAtTail(58);
// myLinkedList.addAtTail(2);
// myLinkedList.get(38);
// myLinkedList.addAtIndex(33, 59);
// myLinkedList.addAtHead(37);
// myLinkedList.deleteAtIndex(15);
// myLinkedList.addAtTail(64);
// myLinkedList.get(56);
// myLinkedList.addAtHead(0);
// myLinkedList.get(40);
// myLinkedList.addAtHead(92);
// myLinkedList.deleteAtIndex(63);
// myLinkedList.get(35);
// myLinkedList.addAtTail(62);
// myLinkedList.addAtTail(32);
