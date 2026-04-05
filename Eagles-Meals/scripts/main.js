const recipes = [
    {
        name: "Sweet and Sour Chicken",
        cookTime: 80,
        servings: "6-8 servings",
        ingredients: [
            "2-3 lbs, frying chicken",
            "3/4 cup flour",
            "1/3 cup salad oil, hot",
            "1 teaspoon salt",
            "1/4 teaspoon pepper",
            "1 can &lpar;13 oz.&rpar; pineapple chunks",
            "1 cup sugar",
            "3/4 cup vinegar",
            "1 tablesppon soy sauce",
            "1/4 teaspoon ginger &lpar;optional&rpar;",
            "2 tablespoons chicken drippings",
            "1 large green pepper",
            "water"
        ],
        steps: [
            "Cut up 2-3 lbs. frying chicken.",
            "Coat chicken with 1/2 cup flour.",
            "Brown chicken in 1/3 cup salad oil, hot.",
            "Place in shallow roasting pan skin side up.",
            "Sprinkle with 1 teaspoon  salt and 1/4 teaspoon pepper.",
            "Drain and reserve juice from pineapple chunks can.",
            "Add water to pineapple joice to make 1 1/4 cup liquid.",
            "In saucepan combine 1 cup sugar, 4 tablespoons flour, 1 1/4 cup pineapple juice mixture, 3/4 cup vinegar, 1 tablespoon soy sauce, 1/4 teaspoon ginger &lpar;optional&rpar;, 2 tablespoons chicken drippings.",
            "Bring mixture to boil, stirring constantly. Boil 2 minutes. Pour over chicken.",
            "Bake uncovered for 30 minutes at 350 degrees.",
            "Add pineapple chunks &lpar; and 1 large green pepper cut into strips.",
            "Bake 30 minutes longer."
        ]
    },
    {
        name: "Peanut Butter Cookies",
        cookTime:20,
        servings:"7 dozen",
        ingredients:[
            "4 cups basic cookie mix",
            "1/4 cup brown sugar",
            "1/2 to 3/4 cup peanut butter",
            "1 egg, slightly beaten",
            "1 1/2 teaspoons vanilla",
            "1 tablespoon water"
        ],
        steps:[
            "Blend 4 cups basic cookie mix, 1/4 cup brown sugar, 1/2 to 3/4 cup peanut butter, 1 egg, slightly beaten, 1 1/2 teaspoons vanilla, and 1 tablespoon water thoroughly.",
            "Make into small balls, place on ungreased cookie sheet, and flatten with tines of a fork.",
            "Bake 375 for 10 to 12 minutes.",
            "Remove to rack to cool."
        ]
    },
    {
        name: "Fruit Cocktail Dessert",
        cookTime: 50,
        servings: "8-10 servings",
        ingredients: [
            "1 cup flour",
            "1 cup sugar",
            "1 teaspoon baking soda",
            "1/2 teaspoon salt",
            "1 egg, slightly beaten",
            "1/2 cup juice, 1 can fruit cocktail, or 2 cups peaches & pears, diced",
            "1/2 cup brown sugar",
            "1/2 cup chopped nuts"
        ],
        steps: [
            "Mix together 1 cup flour, 1 cup sugar, 1 teaspoon baking soda, 1/2 teaspoon salt.",
            "Add 1 egg, slightly beaten, 1/2 cup joice, 1 can fuit cocktail, or 2 cups peaches & pears, diced.",
            'Pour into 8" x 8" x 2" pan.',
            "Bake at 350 degrees for 35 to 40 minutes."
        ]
    },
    {
        name: "Rice Beef Stew",
        cookTime: 170,
        servings: "8 servings",
        ingredients: [
            "1/2 cup flour",
            "1 teaspoon salt",
            "1/2 teaspoon pepper",
            "2 lbs beef, cubed 1 1/2 inch",
            "2 tablespoons fat",
            "1/2 medium onion, diced",
            "1/4 teaspoon garlic salt &lpar;optional&rpar;",
            "4 cups hot water",
            "3 cups tomatoes",
            "1 tablespoon salt",
            "1 teaspoon soy sauce &lpar;optional&rpar;",
            "18 small pearl onions or 2 cups cut-up onions",
            "7 carrots, cut in 2 inch strips",
            "1 cup uncooked rice",
            "2 cups canned peas"
        ],
        steps: [
            "Combine 1/2 cup flour, 1 teaspoon salt, and 1/2 teaspoon pepper.",
            "Coat 2 lbs beef, cubed 1 1/2 inch with mixture.",
            "Melt 2 tablespoons fat in heavy pan.",
            "Add meat and brown.",
            "Add 1/2 medium onion, diced, 1/4 teaspoon garlic salt &lpar;optional&rpar;, 4 cups hot water, 3 cups tomatoes, 1 tablespoon salt, 1 teaspoon salt, 1 teaspoon soy sauce &lpar;optional&rpar;.",
            "Cover and simmer 2 hours or until meat is tender.",
            "Add 18 small pearl onions or 2 cups cut up onions, 7 carrots cut in 2 inch strips, and 1 cup uncooked rice.",
            "Cook 25 minutes.",
            "Add 2 cups canned peas.",
            "Cook 5-10 minutes."
        ]
    },
    {
        name: "Scalloped Potatoes",
        cookTime: 75,
        servings: "6 servings",
        ingredients: [
            "6 raw potatoes",
            "3 tablespoon flour",
            "salt",
            "pepper",
            "butter or margarine",
            "milk, perferably hot"
        ],
        steps: [
            "Peel and slice 6 raw potatoes.",
            "Place a layer of potatoes in a greased casserole dish.",
            "Sprinkle potatoes with 1 tablespoon flour, salt, and pepper.",
            "Dot with butter or margarine",
            "Repeat, making 3 layers",
            "Pour milk, perferably hot, to barely cover potatoes.",
            "Bake at 350 degrees until tender, about 1 hour."
        ]
    },
    {
        name: "Tuna Salad",
        cookTime: 20,
        servings: "6 servings",
        ingredients: [
            "1 cup uncooked macaroni noodles",
            "4 cups boiling water",
            "1 teaspoon salt",
            "1 can tuna fish",
            "1 cup mixed chopped raw vegetables &lpar; celery, green pepper, onion, etc.",
            "1/3 cup salad dressing"
        ],
        steps: [
            "Boil 1 cup uncooked macaroni noodles until tender in 4 cups boiling water with 1 teaspoon salt.",
            "Drain and rinse with cold water.",
            "Drain again.",
            "Then chill.",
            "Mix together chilled macaroni, 1 can tuna fish, 1 cup mixed chopped raw vegetables &lpar;celery, green pepper, onion, ect.&rpar;, and 1/3 cup salad dressing thoroughly."
        ]
    }

]

const weeklyRecipes = {
    sunday: [],
    monday: [],
    tuesday: [],
    wednesday: [],
    thursday: [],
    friday: [],
    saturday: []
}

let recipeContainer = document.querySelector('.recipe');
let input = document.querySelector('#recipe-search');
let searchButton = document.querySelector('.search');

searchButton.addEventListener('click', search);

function search() {
    let recipeSearch = input.value;
    let maxTime = parseInt(recipeSearch);

    let filteredRecipes = recipes.filter(function(recipe) {
        let matchesText =
            recipe.name.toLowerCase().includes(recipeSearch.toLowerCase()) ||
            recipe.servings.toLowerCase().includes(recipeSearch.toLowerCase()) ||
            recipe.steps.find(step => step.toLowerCase().includes(recipeSearch.toLowerCase())) ||
            recipe.ingredients.find(ingredient => ingredient.toLowerCase().includes(recipeSearch.toLowerCase()))
        let matchesTime = !isNaN(maxTime) ? recipe.cookTime <= maxTime : false;

        return matchesText || matchesTime;
    })
    console.log(filteredRecipes);

    recipeContainer.innerHTML = '';
    filteredRecipes.forEach(function(recipe) {
        renderRecipe(recipe);
    })
}

let randomNum = Math.floor(Math.random() * recipes.length);

console.log(randomNum);

function listTemplate(list) {
    return list.map((item) => `<li>${item}</li>`).join(" ");
}

function recipesTemplate(recipes) {
    return `
            <h2>${recipes.name}</h2>
            <p>Cook time: ${recipes.cookTime} mins</p>
            <p>Servings: ${recipes.servings}</p>
            <hr>
            <h3>Ingredients</h3>
            <ul>
                ${listTemplate(recipes.ingredients)}
            </ul>
            <hr>
            <h3>Recipe</h3>
            <ul>
                ${listTemplate(recipes.steps)}
            </ul>
    `
}

function renderRecipe(recipe) {
    let html = recipesTemplate(recipe);
    recipeContainer.innerHTML += html
}

function setupDayButton(dayClass) {
    const container = document.querySelector(`.${dayClass}`);
    const button = container.querySelector("button");

    button.addEventListener("click", function () {
        const recipeName = prompt(`Enter a recipe for ${dayClass}:`);
        if (recipeName && recipeName.trim() !== "") {
            weeklyRecipes[dayClass].push(recipeName.trim());

            renderDay(container, weeklyRecipes[dayClass]);
        }
    });
}

function renderDay(container, recipes) {
    let ul = container.querySelector("ul");

    if (!ul) {
        ul = document.createElement("ul");
        container.appendChild(ul);
    }

    ul.innerHTML = "";

    recipes.forEach(recipe => {
        const li = document.createElement("li");
        li.textContent = recipe;
        ul.appendChild(li);
    });
}

setupDayButton("sunday");
setupDayButton("monday");
setupDayButton("tuesday");
setupDayButton("wednesday");
setupDayButton("thursday");
setupDayButton("friday");
setupDayButton("saturday");

function init() {
    renderRecipe(recipes[randomNum]);
}

init();