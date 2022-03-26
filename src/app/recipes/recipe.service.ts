import { EventEmitter } from "@angular/core";
import { Ingredient } from "../shared/ingredient.model";
import { Recipe } from "./recipe.model";

export class RecipeService {

    recipeSelected = new EventEmitter<Recipe>();

    private recipes: Recipe[] = [
        new Recipe(
            'Tortilla de patata',
            'Estupenda y típica tortilla de patatas',
            'https://static1.abc.es/media/bienestar/2020/05/22/tortilla-patatas-k9tF--1200x630@abc.jpeg',
            [
                new Ingredient('Patata', 4),
                new Ingredient('Cebolla', 1),
                new Ingredient('Huevo', 6),
                new Ingredient('Aceite de oliva', 1),
            ]
            ),

        new Recipe(
            'Verduras al horno',
            'Selección de verduras al horno saludables',
            'https://www.recetasderechupete.com/wp-content/uploads/2019/12/Verduras-al-horno.jpg',
            [
                new Ingredient('Berenjena', 1),
                new Ingredient('Calabacín', 2),
                new Ingredient('Pimiento verde', 1),
                new Ingredient('Pimiento rojo', 1),
            ]
            )
    ];

    getRecipes() {
        return this.recipes.slice();
    }

}