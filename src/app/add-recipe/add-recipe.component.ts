import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  private recipe: FormGroup;

  ngOnInit() {
    this.recipe = new FormGroup({
      name: new FormControl('risotto', [
        Validators.required,
        Validators.minLength(2)
      ])
    });
  }
  onSubmit() {
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }
}
