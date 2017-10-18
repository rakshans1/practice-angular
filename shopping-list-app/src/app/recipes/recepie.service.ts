import  { EventEmitter, Injectable } from '@angular/core';

import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';
import { ShoppingListService } from '../shopping-list/shopping-list.service';

@Injectable()
export class RecipeService {
	recipeSelected = new EventEmitter<Recipe>();

	private recipes: Recipe[] = [
    new Recipe(
    	'Baked Teriyaki Chicken', 
    	'A much requested chicken recipe! Easy to double for a large group. Delicious!', 
    	'http://images.media-allrecipes.com/userphotos/720x405/384820.jpg',
    	[
    		new Ingredient('Meat', 1),
    		new Ingredient('French Fries', 20)
    	]
    ),
		new Recipe(
			'Curried Chicken and Broccoli Casserole', 
			'This chicken and broccoli casserole is my 13-year-old sons favorite dish and the one he requests for every one of his birthdays.',
			'http://images.media-allrecipes.com/userphotos/560x315/2161924.jpg',
			[
    		new Ingredient('Chicken', 5),
    		new Ingredient('Broccoli', 20)
    	]
		),
	];

	constructor(private slService: ShoppingListService) {

	}

	getRecipes() {
		return this.recipes.slice();
	}

	addIngredientsToShoppingList(ingredients: Ingredient[]) {
		this.slService.addIngredients(ingredients);
	}
}