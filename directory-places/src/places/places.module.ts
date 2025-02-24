import { Module } from '@nestjs/common';
import { PlacesService } from './places.service';
import { SequelizeModule } from '@nestjs/sequelize';
//import { PlacesController } from './places.controller';
import { Place } from './places.entity';
import { Category } from '../categories/categories.entity';

@Module({
  providers: [PlacesService],
  imports: [SequelizeModule.forFeature([Place, Category])],
  //controllers: [PlacesController],
  exports: [PlacesService],
})
export class PlacesModule {}
