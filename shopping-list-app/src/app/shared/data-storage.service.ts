import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { RecipeService } from '../recipes/recepie.service';
import { Recipe } from '../recipes/recipe.model';
import 'rxjs/Rx';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeServie: RecipeService, private authService: AuthService ) {}

  storeRecipes() {
    const token = this.authService.getToken();
    return this.http.put('https://shopping-list-app-5a2c2.firebaseio.com/recipes.json?auth=' + token, this.recipeServie.getRecipes());
  }

  getRecipes() {
    const token = this.authService.getToken();
    this.http.get('https://shopping-list-app-5a2c2.firebaseio.com/recipes.json?auth=' + token)
    .map(
      (response: Response) => {
        const recipes = response.json();
        for (const recepie of recipes) {
          if (!recepie['ingredients']) {
            recepie['ingredients'] = [];
          }
        }
        return recipes;
      }
    )
    .subscribe(
      (recipes: Recipe[]) => {
        this.recipeServie.setRecipes(recipes);
      }
    );
  }
}
