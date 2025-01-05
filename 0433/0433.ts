function minMutation(startGene: string, endGene: string, bank: string[]): number {
    let minMutations = Infinity;

    const genes = [];
    genes.push({gene: startGene, mutations: 0});

    const genesSeen: Map<string, boolean> = new Map<string, boolean>();
    genesSeen.set(startGene, true);

    while (genes.length > 0) {
        const gene = genes.shift();
        if (gene.gene === endGene) {
            minMutations = gene.mutations;
            continue;
        }

        for (const b of bank) {
            if (mutationCount(gene.gene, b) === 1 && !genesSeen.has(b)) {
                genes.push({gene: b, mutations: gene.mutations + 1});
                genesSeen.set(b, true);
            }
        }
    }

    return minMutations === Infinity ? -1 : minMutations;
};


function mutationCount(gene1: string, gene2: string): number {
    let differences = 0;

    for (let i = 0; i < gene1.length; i++) {
        if (gene1[i] !== gene2[i]) {
            differences++;
        }
    }

    console.log(`genes ${gene1} and ${gene2} have ${differences} differences`);
    return differences;
}

// function mutate(gene: string, index: number): string {
//     const letterIndex =
// }

const startGene = "AACCGGTT";
const endGene = "AAACGGTA";
const bank = ["AACCGGTA","AACCGCTA","AAACGGTA"]

console.log(minMutation(startGene, endGene, bank));
