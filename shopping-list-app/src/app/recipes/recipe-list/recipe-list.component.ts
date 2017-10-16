import { Component, OnInit } from '@angular/core';

import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
	recipes: Recipe[] = [
		new Recipe('A test Recipe', 'This is Description', 'https://cdn.pixabay.com/photo/2016/02/02/15/34/dishes-1175496_960_720.jpg'),
	];

  constructor() { }

  ngOnInit() {
  }

}
