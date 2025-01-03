/**
 * Definition for a binary tree node.
 * class TreeNode {
 *     val: number
 *     left: TreeNode | null
 *     right: TreeNode | null
 *     constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.left = (left===undefined ? null : left)
 *         this.right = (right===undefined ? null : right)
 *     }
 * }
 */

function isSymmetric(root: TreeNode | null): boolean {
    if (!root.left && !root.right) { return true; }
    if (!root.left || !root.right) { return false; }

    const nodes = [];
    nodes.push({ node: root, depth: 0 });
    console.log(nodes);

    while (nodes.length > 0) {
        const values: (number | null)[] = [];
        for (const n of nodes) {
            if (n.node.left) {
                console.log(`pushing left child value ${n.node.left.val}`);
                values.push(n.node.left.val);
            } else {
                values.push(null);
            }

            if (n.node.right) {
                console.log(`pushing right child value ${n.node.right.val}`);
                values.push(n.node.right.val);
            } else {
                values.push(null);
            }
        }

        if (areValuesSymmetric(values)) {
            const thisDepth = nodes[0].depth;
            while (nodes.length > 0 && nodes[0].depth === thisDepth) {
                const node = nodes.shift();
                if (node.node.left) {
                    nodes.push({ node: node.node.left, depth: thisDepth + 1 });
                }
                if (node.node.right) {
                    nodes.push({ node: node.node.right, depth: thisDepth + 1 });
                }
            }
        } else {
            console.log(`returning false because values are not symmetric`);
            return false;
        }

        if (!nodes.find(x => (x.node !== null && x.node !== undefined))) {
            break;
        }

        console.log(nodes);
        console.log();
    }

    console.log(`returning true`);
    return true;
};


function areValuesSymmetric(values: number[]): boolean {
    console.log(`areValuesSymmetric([${values}])`);
    console.log(`[${values.join(',')}] ?== [${Array.from(values).reverse().join(',')}]`);
    return values.join(',') === Array.from(values).reverse().join(',');
}
