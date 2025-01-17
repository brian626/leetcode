function doesValidArrayExist(derived: number[]): boolean {
    return derived.reduce((a, b) => a ^ b, 0) === 0;
};

const derived = [1,1,0];

console.log(doesValidArrayExist(derived));
