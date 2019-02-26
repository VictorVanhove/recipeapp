import { Injectable } from '@angular/core';
import { RECIPES } from './mock-recipes';
import { Recipe } from './recipe.model';
import { Observable } from 'rxjs';
import { map, share } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RecipeDataService {
  constructor(private http: HttpClient) {}

  get recipes$(): Observable<Recipe[]> {
    return this.http.get(`${environment.apiUrl}/recipes/`).pipe(
      map((list: any[]): Recipe[] => list.map(Recipe.fromJSON)),
      share()
    );
  }

  addNewRecipe(recipe: Recipe) {
    return this.http.post(`${environment.apiUrl}/recipes/`, recipe.toJSON());
  }
}
