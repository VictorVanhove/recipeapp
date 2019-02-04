import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { Recipe } from './recipe.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private _recipeDataService: RecipeDataService) {}
  public filterRecipeName: string;

  applyFilter(filter: string) {
    this.filterRecipeName = filter;
  }
  get recipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  addNewRecipe(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
