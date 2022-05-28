import { Ingredient } from './ingredient.entity';

export class Recipe {
  id: number;
  ingredients: Ingredient;
  instructions: string;
}
