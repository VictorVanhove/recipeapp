import { Component } from '@angular/core';
import { RecipeDataService } from './recipe-data.service';
import { Recipe } from './recipe.model';
import { BehaviorSubject, Subject, Observable } from 'rxjs';
import {
  distinctUntilChanged,
  debounceTime,
  map,
  switchMap,
  share
} from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  public filterRecipeName: string;
  public filterRecipe$ = new Subject<string>();

  private _refreshRecipes$ = new BehaviorSubject(true);
  private _fetchRecipes$: Observable<Recipe[]> = this._refreshRecipes$.pipe(
    switchMap(() => this._recipeDataService.recipes$)
  );
  public loadingError$ = this._recipeDataService.loadingError$;

  constructor(private _recipeDataService: RecipeDataService) {
    this.filterRecipe$
      .pipe(
        distinctUntilChanged(),
        debounceTime(400),
        map(val => val.toLowerCase())
      )
      .subscribe(val => (this.filterRecipeName = val));
  }

  get recipes$() {
    return this._fetchRecipes$;
  }

  addNewRecipe(recipe) {
    this._recipeDataService
      .addNewRecipe(recipe)
      .subscribe(() => this._refreshRecipes$.next(true));
  }
}
