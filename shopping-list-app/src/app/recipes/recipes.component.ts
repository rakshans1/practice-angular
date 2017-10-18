import { Component, OnInit } from '@angular/core';

import { Recipe } from './recipe.model';
import { RecipeService } from './recepie.service';
@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeService]
})
export class RecipesComponent implements OnInit {
	selectedRecipe: Recipe ;

  constructor(private recepieService: RecipeService) { }

  ngOnInit() {
  	this.recepieService.recipeSelected.subscribe(
  		(recipe: Recipe) => {
  			this.selectedRecipe = recipe;
  		}
  	);
  }

}
