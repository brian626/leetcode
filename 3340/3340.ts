function isBalanced(num: string): boolean {
    let evenSum = 0;
    for (let i = 0; i < num.length; i += 2) { evenSum += parseInt(num[i]); }

    let oddSum = 0;
    for (let i = 1; i < num.length; i += 2) { oddSum += parseInt(num[i]); }

    return evenSum === oddSum;
};


const num = "24123";
console.log(isBalanced(num));
