import { PartialType } from '@nestjs/mapped-types';
import { IsString } from 'class-validator';

export class CreateIngredientDto {
  @IsString()
  type: string;

  @IsString()
  category: string;

  @IsString()
  name: string;

  @IsString()
  description: string;
}

export class UpdateIngredientDto extends PartialType(CreateIngredientDto) {}
