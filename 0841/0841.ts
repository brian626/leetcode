function canVisitAllRooms(rooms: number[][]): boolean {
    const visited: boolean[] = [];
    for (let i = 0; i < rooms.length; i++) {
        visited[i] = false;
    }

    const keys = [0];
    while (keys.length > 0) {
        const key = keys.pop();
        if (!visited[key]) {
            visited[key] = true;

            const newKeys = rooms[key];
            for (const newKey of newKeys) {
                keys.push(newKey);
            }
        }
    }

    return (visited.filter(x => x === false).length === 0);
};

const rooms = [[1,3],[3,0,1],[2],[0]];

console.log(canVisitAllRooms(rooms));
