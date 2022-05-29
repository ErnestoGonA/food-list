import { Injectable, NotFoundException } from '@nestjs/common';
import {
  CreateIngredientDto,
  UpdateIngredientDto,
} from 'src/dtos/ingredient.dto';
import { Ingredient } from 'src/entities/ingredient.entity';

@Injectable()
export class IngredientsService {
  private ingredientsIdCounter = 2;
  private ingredients: Ingredient[] = [
    {
      id: 1,
      type: 'Vegetable',
      category: 'Vegetable',
      name: 'Carrot',
      description: 'Orange carrot',
    },
    {
      id: 2,
      type: 'Vegetable',
      category: 'Vegetable',
      name: 'Potato',
      description: 'Normal potato',
    },
  ];

  findAll() {
    return this.ingredients;
  }

  findOneById(id: number) {
    const ingredient = this.ingredients.find(
      (ingredient) => ingredient.id === id,
    );
    if (!ingredient) {
      throw new NotFoundException(`Ingredient #${id} not found`);
    }
    return ingredient;
  }

  findIndex(id: number): number {
    const index = this.ingredients.findIndex(
      (ingredient) => ingredient.id === id,
    );
    if (index < 0) {
      throw new NotFoundException(`Ingredient #${id} not found`);
    }
    return index;
  }

  create(payload: CreateIngredientDto) {
    const newIngredient = {
      id: ++this.ingredientsIdCounter,
      ...payload,
    };
    this.ingredients.push(newIngredient);
    return newIngredient;
  }

  updateIngredient(id: number, payload: UpdateIngredientDto) {
    this.ingredients[this.findIndex(id)] = {
      ...this.ingredients[this.findIndex(id)],
      ...payload,
      id,
    };
    return this.findOneById(id);
  }

  delete(id: number) {
    return this.ingredients.splice(this.findIndex(id), 1);
  }
}
