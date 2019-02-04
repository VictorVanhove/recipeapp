import { Component } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  recipes = RECIPES;
  constructor() {}

  addNewRecipe(recipe: Recipe) {
    this.recipes.push(recipe);
  }
}
