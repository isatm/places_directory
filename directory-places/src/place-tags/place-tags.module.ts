import { Module } from '@nestjs/common';
import { SequelizeModule } from '@nestjs/sequelize';
import { PlaceTag } from './place-tags.entity';
//import { PlaceTagsService } from './place-tags.service';
//import { PlaceTagsController } from './place-tags.controller';

@Module({
  imports: [SequelizeModule.forFeature([PlaceTag])], // 🔹 Asegúrate de que PlaceTag está registrado aquí
  //providers: [PlaceTagsService],
  //controllers: [PlaceTagsController],
  exports: [SequelizeModule], // 🔹 Exporta SequelizeModule si otros módulos lo necesitan
})
export class PlaceTagsModule {}
