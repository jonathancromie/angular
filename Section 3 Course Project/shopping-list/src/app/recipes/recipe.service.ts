import { Recipe } from "./recipe.model";
import { Injectable } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { ShoppingListService } from "../shopping-list/shopping-list.service";

@Injectable()
export class RecipeService {
    private recipes: Recipe[] = [
        new Recipe(
            'Tasty Schnitzel', 
            'A super tasty schnitzel', 
            'https://upload.wikimedia.org/wikipedia/commons/2/2f/Oscar_schnitzel_at_Grilli_Toro.jpg',
            [
                new Ingredient('Meat', 1),
                new Ingredient('Fries', 20),
            ]),
        new Recipe(
            'Big Fat Burger', 
            'A big juicy fat burger', 
            'https://upload.wikimedia.org/wikipedia/commons/b/be/Burger_King_Angus_Bacon_%26_Cheese_Steak_Burger.jpg',
            [
                new Ingredient('Buns', 2),
                new Ingredient('Meat', 1),
            ]
        ),
    ];

    constructor(private shoppingListService: ShoppingListService) {}

    getRecipes() {
        return this.recipes.slice();
    }

    getRecipe(index: number) {
        return this.recipes[index];
    }

    addIngredientsToShoppingList(ingredients: Ingredient[]) {
        this.shoppingListService.addIngredients(ingredients);
    }
}