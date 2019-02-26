import { Ingredient } from './ingredient.model';

export class Recipe {
  constructor(
    private _name: string,
    private _ingredients = new Array<Ingredient>(),
    private _dateAdded = new Date()
  ) {}

  static fromJSON(json: any): Recipe {
    const rec = new Recipe(
      json.name,
      json.ingredients.map(Ingredient.fromJSON),
      json.created
    );
    return rec;
  }
  toJSON(): any {
    return {
      name: this.name,
      ingredients: this.ingredients.map(ing => ing.toJSON()),
      created: this.dateAdded
    };
  }
  get name(): string {
    return this._name;
  }
  get dateAdded(): Date {
    return this._dateAdded;
  }
  get ingredients(): Ingredient[] {
    return this._ingredients;
  }
  addIngredient(name: string, amount?: number, unit?: string) {
    this._ingredients.push(new Ingredient(name, amount, unit));
  }
}
