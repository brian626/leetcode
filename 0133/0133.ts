/**
 * Definition for _Node.
 * class _Node {
 *     val: number
 *     neighbors: _Node[]
 *
 *     constructor(val?: number, neighbors?: _Node[]) {
 *         this.val = (val===undefined ? 0 : val)
 *         this.neighbors = (neighbors===undefined ? [] : neighbors)
 *     }
 * }
 *
 */


function cloneGraph(node: _Node | null): _Node | null {
    const graphMap: Map<number, number[]> = new Map<number,number[]>();
    const nodes: _Node[] = [];
    nodes.push(node);

    while (nodes.length > 0) {
        const n = nodes.shift();

        if (n && !graphMap.has(n.val)) {
            const neighbors = n.neighbors.map(x => x.val);

            graphMap.set(n.val, neighbors);

            for (const m of n.neighbors) {
                nodes.push(m);
            }
        }
    }

    console.log(graphMap);

    for (const [val, _neighbors] of graphMap) {
        const node = new _Node(val);
        nodes[val] = node;
    }

    for (const [val, neighbors] of graphMap) {
        const node = nodes[val];
        for (const n of neighbors) {
            node.neighbors.push(nodes[n]);
        }
    }

    return nodes[1];
};
