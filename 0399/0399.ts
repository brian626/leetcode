class Equation {
    name: string;
    value: number;

    constructor(name: string, value: number) {
        this.name = name;
        this.value = value;
    }
}

class Variable {
    name: string;
    equations: Equation[];

    constructor(name: string) {
        this.name = name;
        this.equations = [];
    }
}

function calcEquation(equations: string[][], values: number[], queries: string[][]): number[] {
    const variables: Map<string, Variable> = new Map<string, Variable>();

    for (let i = 0; i < equations.length; i++) {
        const [varname1, varname2] = equations[i];
        const value = values[i];

        const var1 = variables.get(varname1) || new Variable(varname1);
        var1.equations.push(new Equation(varname2, value));
        variables.set(varname1, var1);

        const var2 = variables.get(varname2) || new Variable(varname2);
        var2.equations.push(new Equation(varname1, 1 / value));
        variables.set(varname2, var2);
    }

    // console.log(variables.get('x2'));

    const answers: number[] = [];

    for (const q of queries) {
        console.log(`query is ${q}`);

        const [varname1, varname2] = q;
        if (!variables.has(varname1) || !variables.has(varname2)) {
            answers.push(-1);
            continue;
        } else if (varname1 === varname2) {
            answers.push(1);
            continue;
        }

        const products = [{ variable: variables.get(varname1), value: 1 }];
        console.log(`products are...`);
        console.log(products);
        console.log(`...`);

        let foundAnswer = false;
        let iterations = 0;
        const variablesUsed: Set<string> = new Set<string>();

        while (products.length > 0) {
            const product = products.shift();
            if (product.variable.name === varname2) {
                foundAnswer = true;
                answers.push(product.value);
                console.log(`found answer: ${product.value}`);
                break;
            }

            for (const e of product.variable.equations) {
                if (!variablesUsed.has(e.name)) {
                    variablesUsed.add(e.name);
                    products.push({ variable: variables.get(e.name), value: product.value * e.value });
                }
            }

            console.log(products);
            iterations++;
            if (iterations > 10) { console.log(`SAFETY`); break; }
        }

        if (!foundAnswer) {
            answers.push(-1);
            console.log(`didn't find answer`);
        }

        console.log();
    }

    return answers;
};

const equations = [["a", "b"], ["c", "d"]]
const values = [1.0, 1.0]
const queries = [["a", "c"], ["b", "d"], ["b", "a"], ["d", "c"]]


console.log(calcEquation(equations, values, queries));
