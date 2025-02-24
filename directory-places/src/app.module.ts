import { Module, OnModuleInit } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { mysqlConfig } from './config/database.config';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { PlaceTagsModule } from './place-tags/place-tags.module';

@Module({
  imports: [
    PlacesModule,
    SequelizeModule.forRoot(mysqlConfig),
    CategoriesModule,
    TagsModule,
    PlaceTagsModule,
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Conexión con MySQL iniciada correctamente');
  }
}
