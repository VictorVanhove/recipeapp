import { Recipe } from './recipe.model';

const JsonRecipes = [
  {
    name: 'spaghetti',
    ingredients: ['tomato', 'onion', 'celery', 'carrot', 'minced meat'],
    dateAdded: new Date(2019, 2, 3)
  },
  {
    name: 'risotto',
    ingredients: ['rice', 'onion', 'parmesan', 'butter'],
    dateAdded: new Date(2019, 2, 5)
  }
];
export const RECIPES: Recipe[] = JsonRecipes.map(Recipe.fromJSON);
