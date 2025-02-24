import { Module } from '@nestjs/common';
import { CategoriesService } from './categories.service';
import { CategoriesController } from './categories.controller';
import { SequelizeModule } from '@nestjs/sequelize';
import { Category } from './categories.entity';

@Module({
  imports: [SequelizeModule.forFeature([Category])], // Importar el modelo
  providers: [CategoriesService],
  controllers: [CategoriesController],
  exports: [SequelizeModule], // Opcional, útil si otro módulo lo necesita
})
export class CategoriesModule {}
