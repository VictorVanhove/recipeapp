import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$.subscribe(val => (this.filterRecipeName = val));
  }

  get recipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  addNewRecipe(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
