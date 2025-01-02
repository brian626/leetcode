function asteroidCollision(asteroids: number[]): number[] {
    let collided = true;
    while (collided) {
        collided = false;

        for (let i = 0; i < asteroids.length - 1; i++) {
            if (asteroids[i] >= 0 && asteroids[i + 1] < 0) {
                collided = true;
                const asteroid1 = Math.abs(asteroids[i]);
                const asteroid2 = Math.abs(asteroids[i + 1]);
                if (asteroid1 > asteroid2) {
                    asteroids.splice(i + 1, 1);
                } else if (asteroid2 > asteroid1) {
                    asteroids.splice(i, 1);
                } else {
                    asteroids.splice(i, 2);
                }
            }
        }
    }

    return asteroids;
};

const asteroids = [8,-8];

console.log(asteroidCollision(asteroids));
