class ListNode {
    val: number
    next: ListNode | null
    constructor(val?: number, next?: ListNode | null) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
}

function modifiedList(nums: number[], head: ListNode | null): ListNode | null {
    const minNum = Math.min(...nums);
    const maxNum = Math.max(...nums);

    let nodePtr = head;
    let prevPtr = null
    while (nodePtr && nums.includes(nodePtr.val)) {
        prevPtr = nodePtr;
        nodePtr = nodePtr.next;
    }

    let headPtr = nodePtr;
    prevPtr = headPtr;

    while (nodePtr) {
        console.log(`considering value ${nodePtr.val}`);
        if (nodePtr.val >= minNum && nodePtr.val <= maxNum) {
            if (nums.includes(nodePtr.val)) {
                console.log(`  omitting value ${nodePtr.val} by setting prev node's (${prevPtr.val}) next to ${nodePtr.next?.val}`);
                prevPtr.next = nodePtr.next;
            } else {
                console.log(`  including value ${nodePtr.val}, case 1`);
                prevPtr = nodePtr;
            }
        } else {
            console.log(`  including value ${nodePtr.val}, case 2`);
            prevPtr = nodePtr;
        }

        nodePtr = nodePtr.next;
    }

    return headPtr;
};

const nums =[1,7,6,2,4]
const head = [3,7,1,8,1]

let headPtr = null;
let nodePtr = null;
for (let i = 0; i < head.length; i++) {
    if (!headPtr) {
        headPtr = new ListNode(head[i]);
        nodePtr = headPtr;
    } else {
        const newPtr = new ListNode(head[i]);
        nodePtr.next = newPtr;
        nodePtr = newPtr;
    }
}

console.log(modifiedList(nums, headPtr));
