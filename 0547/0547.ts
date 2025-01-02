function findCircleNum(isConnected: number[][]): number {
    const provinces: number[][] = [];

    for (let i = 0; i < isConnected.length; i++) {
        for (let j = 0; j < isConnected.length; j++) {
            if (isConnected[i][j] === 1) {
                // console.log(`${i} and ${j} are connected, current provinces are`);
                // console.log(provinces);
                // console.log();

                let existingProvince = -1;

                for (let k = 0; k < provinces.length; k++) {
                    if (provinces[k].includes(i) || provinces[k].includes(j)) {
                        existingProvince = k;
                        break;
                    }
                }

                if (existingProvince === -1) {
                    provinces.push([i, j]);
                } else {
                    const connections = provinces[existingProvince];
                    connections.push(i);
                    connections.push(j);
                    provinces[existingProvince] = Array.from(new Set(connections));
                }
            }
        }
    }

    console.log(`before merging`);
    console.log(provinces);
    console.log();

    let mergedProvince = true;
    while (mergedProvince) {
        mergedProvince = false;

        for (let i = 0; i < provinces.length; i++) {
            for (let j = i + 1; j < provinces.length; j++) {
                for (const p of provinces[i]) {
                    if (provinces[j].includes(p)) {
                        mergedProvince = true;
                        const connections = Array.from(new Set(provinces[i].concat(provinces[j])));
                        provinces.push(connections);
                        provinces.splice(j, 1);
                        provinces.splice(i, 1);
                        break;
                    }
                }
                if (mergedProvince) { break; }
            }
            if (mergedProvince) { break; }
        }
    }

    console.log(`after merging`);
    console.log(provinces);
    return provinces.length;
};

const isConnected = [[1,1,0,0,0,0,0,1,0,0,0,0,0,0,0],[1,1,0,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,1,0,0,0,0,0,0,0,0,0,0,0,0],[0,0,0,1,0,1,1,0,0,0,0,0,0,0,0],[0,0,0,0,1,0,0,0,0,1,1,0,0,0,0],[0,0,0,1,0,1,0,0,0,0,1,0,0,0,0],[0,0,0,1,0,0,1,0,1,0,0,0,0,1,0],[1,0,0,0,0,0,0,1,1,0,0,0,0,0,0],[0,0,0,0,0,0,1,1,1,0,0,0,0,1,0],[0,0,0,0,1,0,0,0,0,1,0,1,0,0,1],[0,0,0,0,1,1,0,0,0,0,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,1,1,1,0,0,0],[0,0,0,0,0,0,0,0,0,0,0,0,1,0,0],[0,0,0,0,0,0,1,0,1,0,0,0,0,1,0],[0,0,0,0,0,0,0,0,0,1,0,0,0,0,1]];

console.log(findCircleNum(isConnected));
