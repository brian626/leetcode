function findAllRecipes(recipes: string[], ingredients: string[][], supplies: string[]): string[] {
    const canMake: string[] = [];

    let keepGoing = true;
    while (keepGoing) {
        keepGoing = false;

        for (let i = 0; i < recipes.length; i++) {
            const recipe = recipes[i];
            if (supplies.includes(recipe)) { continue; }

            const ingredientsNeeded = ingredients[i];
            let haveAllIngredients = true;
            for (const i of ingredientsNeeded) {
                if (!supplies.includes(i)) {
                    haveAllIngredients = false;
                    break;
                }
            }

            if (haveAllIngredients) {
                canMake.push(recipe);
                supplies.push(recipe);
                keepGoing = true;
            }
        }
    }

    return canMake;
};

const recipes = ["bread"]
const ingredients = [["yeast", "flour"]]
const supplies = ["yeast", "flour", "corn"]

console.log(findAllRecipes(recipes, ingredients, supplies));
