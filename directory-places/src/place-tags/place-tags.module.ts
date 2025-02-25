import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlaceTag } from './place-tags.entity';
import { PlaceTagsService } from './place-tags.service';
import { PlaceTagsController } from './place-tags.controller';

@Module({
  imports: [SequelizeModule.forFeature([PlaceTag])],
  controllers: [PlaceTagsController],
  providers: [PlaceTagsService],
})
export class PlaceTagsModule {}
