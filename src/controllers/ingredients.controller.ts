import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Put,
} from '@nestjs/common';
import { IngredientsService } from 'src/services/ingredients.service';
import {
  CreateIngredientDto,
  UpdateIngredientDto,
} from 'src/dtos/ingredient.dto';

@Controller('ingredients')
export class IngredientsController {
  constructor(private ingredientsService: IngredientsService) {}

  @Get()
  getIngredients() {
    return this.ingredientsService.findAll();
  }

  @Get('/:id')
  getIngredientById(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.findOneById(id);
  }

  @Post()
  createIngredient(@Body() payload: CreateIngredientDto) {
    return this.ingredientsService.create(payload);
  }

  @Put('/:id')
  updateIngredient(
    @Param('id', ParseIntPipe) id: number,
    @Body() payload: UpdateIngredientDto,
  ) {
    console.log(payload);
    return this.ingredientsService.updateIngredient(id, payload);
  }

  @Delete('/:id')
  deleteIngredient(@Param('id', ParseIntPipe) id: number) {
    return this.ingredientsService.delete(id);
  }
}
