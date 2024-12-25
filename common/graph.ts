export class Vertex {
    // Name of the vertex.
    private _name: string;
    public get name(): string {
        return this._name;
    }
    public set name(v: string) {
        this._name = v;
    }

    // Edges associated with the vertex
    private _edges: string[];
    public get edges(): string[] {
        return this._edges;
    }
    public set edges(v: string[]) {
        this._edges = v;
    }

    /**
     * Creates a new vertex with empty edges.
     * @param vName Name of the vertex
     */
    constructor(vName: string) {
        this._name = vName;
        this._edges = [];
    }
}

export class Graph {
    // An adjacency list to hold our graph data
    private _adjList: Vertex[];
    private _visited: any;

    constructor() {
        this._adjList = [];
        this._visited = {};
    }

    /**
    * A method to add a new vertex to the graph.
    * @param newVertex Name of the vertex to be added to the graph
    */
    addVertex(newVertex: Vertex): void {
        // We will keep the implementation simple and focus on the concepts

        // If the vertex already exists, do nothing.
        if (this._adjList.find(e => e.name === newVertex.name)) {
            return;
        }

        this._adjList.push(newVertex);
    }

    /**
     * Adds an edge to the graph.
     * @param vertex1 One of the vertices between an edge
     * @param vertex2 Another vertex of an edge
     */
    addAnEdge(vertex1: string, vertex2: string): void {
        // We will keep the implementation simple and focus on the concepts
        // Do not worry about handling invalid indexes or any other error cases.
        // We will assume all vertices are valid and already exist.

        // Add an vertex2 to vertex1 edges.
        const v1: Vertex = this._adjList.find(e => e.name == vertex1)
        if (v1.edges.indexOf(vertex2) === -1) { v1.edges.push(vertex2); }

        // Add an vertex1 to vertex2 edges.
        const v2: Vertex = this._adjList.find(e => e.name == vertex2)
        if (v2.edges.indexOf(vertex1) === -1) { v2.edges.push(vertex1); }
    }

    // Iterative deepening search
    // isGoal is a function that checks whether the current node is the goal
    ids(startVertexName: string, targetVertexName: string): number {
        let maxDepth: number = 0
        let found: number = null

        do {
            // Increase maximum depth
            maxDepth += 1
            // console.log(`increased maxDepth to ${maxDepth}`)
            if (maxDepth > 30) { found = -1; break }

            // Clear the status whether a node has been visited
            this._visited = {}

            // console.log(`calling dls(${startVertexName}, ${maxDepth}, 0, ${targetVertexName})`)
            found = this.dls(startVertexName, maxDepth, 0, targetVertexName)
            // console.log(`  dls returned ${found}`)
        } while (found == null)

        return found
    }

    // Depth-limited search
    // isGoal is a function that checks whether the current node is the goal
    dls(currentVertexName: string, maxDepth: number, currentDepth: number, targetVertexName: string): number {
        // console.log(`dls called`)

        if (this._visited[currentVertexName]) {
            // console.log(`  dls returning null because already visited`)
            return null
        }

        this._visited[currentVertexName] = true

        if (currentVertexName === targetVertexName) {
            // console.log(`  dls returning ${currentVertexName} because it's the target at depth ${currentDepth}`)
            return currentDepth
        }

        // Stop searching when exceed max depth
        // This is the only difference from DFS
        if (currentDepth >= maxDepth) {
            // console.log(`  dls returning null because maxDepth reached`)
            return null
        }

        let currentVertex = this._adjList.find(e => e.name === currentVertexName);

        // currentVertex.edges.forEach(neighbor => {
        for (let i = 0; i < currentVertex.edges.length; i++) {
            const neighbor: string = currentVertex.edges[i]
            if (!this._visited[neighbor]) {
                let found: number = this.dls(neighbor, maxDepth, currentDepth + 1, targetVertexName)
                if (found != null) {
                    // console.log(`  dls returning found ${found}`)
                    return found
                }
            }
        }

        // console.log(`  dls returning null because end of loop`)
        return null
    }
}
