import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { IngredientsController } from './controllers/ingredients.controller';
import { IngredientsService } from './services/ingredients.service';

@Module({
  imports: [],
  controllers: [AppController, IngredientsController],
  providers: [AppService, IngredientsService],
})
export class AppModule {}
