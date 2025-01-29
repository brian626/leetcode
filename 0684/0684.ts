function findRedundantConnection(edges: number[][]): number[] {
    const nodeSet: Set<number> = new Set<number>();
    for (const edge of edges) {
        const [source, destination] = edge;
        nodeSet.add(source);
        nodeSet.add(destination);
    }

    const nodes: number[] = Array.from(nodeSet);

};
