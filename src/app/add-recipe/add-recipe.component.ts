import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe.model';
import {
  FormGroup,
  FormControl,
  Validators,
  FormBuilder
} from '@angular/forms';

@Component({
  selector: 'app-add-recipe',
  templateUrl: './add-recipe.component.html',
  styleUrls: ['./add-recipe.component.css']
})
export class AddRecipeComponent implements OnInit {
  @Output() public newRecipe = new EventEmitter<Recipe>();
  public recipe: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit() {
    this.recipe = this.fb.group({
      name: ['', [Validators.required, Validators.minLength(2)]]
    });
  }
  onSubmit() {
    this.newRecipe.emit(new Recipe(this.recipe.value.name));
  }

  getErrorMessage(errors: any) {
    if (errors.required) {
      return 'is required';
    } else if (errors.minlength) {
      return `needs at least ${
        errors.minlength.requiredLength
      } characters (got ${errors.minlength.actualLength})`;
    }
  }
}
