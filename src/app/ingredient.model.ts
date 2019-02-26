export class Ingredient {
  constructor(
    private _name: string,
    private _amount: number,
    private _unit: string
  ) {}

  static fromJSON(json: any): Ingredient {
    const ing = new Ingredient(json.name, json.amount, json.unit);
    return ing;
  }

  toJSON(): any {
    return { name: this.name, amount: this.amount, unit: this.unit };
  }

  get name() {
    return this._name;
  }
  get amount() {
    return this._amount;
  }
  get unit() {
    return this._unit;
  }
}
