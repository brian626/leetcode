class Expression {
    numerator: string;
    denominator: string;
    value: number;

    constructor(numerator: string, denominator: string, value: number) {
        this.numerator = numerator;
        this.denominator = denominator;
        this.value = value;
    }
}


function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const expressions: Expression[] = [];

    for (let i = 0; i < equations.length; i++) {
        const x = new Expression(equations[i][0], equations[i][1], values[i]);
        expressions.push(x);
    }

    let answers: number[] = [];

    for (const q of queries) {
        const numerator = q[0];
        const denominator = q[1];

        console.log();
        console.log(`considering ${numerator} / ${denominator}`);

        // Are n and d the same?
        if (numerator === denominator) {
            if (expressions.find(x => x.numerator === numerator) || expressions.find(x => x.denominator === denominator)) {
                console.log(`  ${numerator} / ${denominator} === 1`);
                answers.push(1);
            } else {
                console.log(`  ${numerator} is unknown`);
                answers.push(-1);
            }
            continue;
        }

        // Do we have n/d?
        let answer = expressions.find(x => x.numerator === q[0] && x.denominator === q[1]);
        if (answer) {
            console.log(`  ${numerator} / ${denominator} === ${answer.value} (known)`);
            answers.push(answer.value);
            continue;
        }

        // Do we have d/n?
        answer = expressions.find(x => x.numerator === q[1] && x.denominator === q[0]);
        if (answer) {
            console.log(`  ${numerator} / ${denominator} === ${1 / answer.value} (known)`);
            answers.push(1 / answer.value);
            continue;
        }

        // Can we combine two expressions?

        // n/x = a, d/x = b ===> n/d = a/b
        let expression1 = expressions.find(x => x.numerator === numerator);
        let expression2 = expressions.find(x => x.numerator === denominator);
        if (expression1 && expression2 && expression1.denominator === expression2.denominator) {
            console.log(`  ${numerator} / ${denominator} === ${expression1.value / expression2.value} (calculated case 1)`);
            answers.push(expression1.value / expression2.value);
            continue;
        }

        // n/x = a, x/d = b ===> n/d = ab
        expression1 = expressions.find(x => x.numerator === numerator);
        expression2 = expressions.find(x => x.denominator === denominator);
        if (expression1 && expression2 && expression1.denominator === expression2.numerator) {
            console.log(`  ${numerator} / ${denominator} === ${expression1.value * expression2.value} (calculated case 2)`);
            answers.push(expression1.value * expression2.value);
            continue;
        }

        // Can we combine multiple expressions?
        let simplified = true;
        let constant = 1.0;
        let simplifiedNumerator = numerator;
        while (simplified && simplifiedNumerator !== denominator) {
            simplified = false;

            const numeratorEquivalentExpression = expressions.find(x => x.numerator === simplifiedNumerator);
            if (numeratorEquivalentExpression) {
                console.log(`  simplified numerator ${simplifiedNumerator} to ${numeratorEquivalentExpression.value} * ${numeratorEquivalentExpression.denominator}`);
                simplified = true;
                simplifiedNumerator = numeratorEquivalentExpression.denominator;
                constant *= numeratorEquivalentExpression.value;
            }
        }

        if (simplifiedNumerator === denominator) {
            console.log(`  ${numerator} / ${denominator} === ${constant} (calculated case 3)`);
            answers.push(constant);
            continue;
        }

        simplified = true;
        constant = 1.0;
        let simplifiedDenominator = denominator;
        while (simplified && simplifiedDenominator !== numerator) {
            simplified = false;

            const denominatorEquivalentExpression = expressions.find(x => x.numerator === simplifiedDenominator);
            if (denominatorEquivalentExpression) {
                console.log(`  simplified denominator ${simplifiedDenominator} to ${denominatorEquivalentExpression.value} * ${denominatorEquivalentExpression.denominator}`);
                simplified = true;
                simplifiedDenominator = denominatorEquivalentExpression.denominator;
                constant /= denominatorEquivalentExpression.value;
            }
        }

        if (simplifiedDenominator === numerator) {
            console.log(`  ${numerator} / ${denominator} === ${constant} (calculated case 4)`);
            answers.push(constant);
            continue;
        }

        console.log(`  giving up`);
        answers.push(-1);
    }

    return answers;
};

const equations = [["x1","x2"],["x2","x3"],["x1","x4"],["x2","x5"]]
const values = [3.0,0.5,3.4,5.6]
const queries = [["x2","x4"],["x1","x5"],["x1","x3"],["x5","x5"],["x5","x1"],["x3","x4"],["x4","x3"],["x6","x6"],["x0","x0"]]

console.log(calcEquation(equations, values, queries));
