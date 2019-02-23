import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { Recipe } from './recipe.model';
import { Subject } from 'rxjs';
import { distinctUntilChanged, debounceTime, map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterRecipeName = val));
  }

  get recipes(): Recipe[] {
    return this._recipeDataService.recipes;
  }

  addNewRecipe(recipe) {
    this._recipeDataService.addNewRecipe(recipe);
  }
}
