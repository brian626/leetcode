class Vertex {
    label: number;
    edges: number[];
    visited: boolean;

    constructor(l: number) {
        this.label = l;
        this.edges = [];
        this.visited = false;
    }
}


function validPath(n: number, edges: number[][], source: number, destination: number): boolean {
    if (source === destination) { return true; }

    const vertices: Vertex[] = new Array(n);
    for (let i = 0; i < n; i++) {
        vertices[i] = new Vertex(i);
    }

    let destinationReachable = false;
    for (const edge of edges) {
        const [v1, v2] = edge;
        vertices[v1].edges.push(v2);
        vertices[v2].edges.push(v1);
        if (v1 === destination || v2 === destination) {
            destinationReachable = true;
        }
    }

    if (!destinationReachable) {
        return false;
    }

    console.log(vertices);

    const verticesToVisit: Vertex[] = [vertices[source]];
    let reachedDestination = false;
    while (verticesToVisit.length > 0) {
        const v = verticesToVisit.pop();
        v.visited = true;
        if (v.label === destination) {
            reachedDestination = true;
            break;
        }

        for (const edge of v.edges) {
            const e = vertices[edge];
            if (!e.visited) {
                verticesToVisit.push(e);
            }
        }
    }

    return reachedDestination;
};

const n = 3;
const edges = [[0, 1], [1, 2], [2, 0]];
const source = 0;
const destination = 2;

console.log(validPath(n, edges, source, destination));
