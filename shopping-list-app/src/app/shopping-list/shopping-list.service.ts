import { EventEmitter } from '@angular/core'; 

import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
	newIngredientAdded = new EventEmitter<Ingredient[]>();

	ingredients: Ingredient[] = [
		new Ingredient('Apples', 10),
		new Ingredient('Tomato', 15)
	];
	getIngredients() {
  	return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
  	this.ingredients.push(ingredient);
  	this.newIngredientAdded.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
  	this.ingredients.push(...ingredients);
  	this.newIngredientAdded.emit(this.ingredients.slice());
  }
}