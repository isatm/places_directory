import { Module, OnModuleInit } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { mysqlConfig } from './config/database.config';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { PlaceTagsModule } from './place-tags/place-tags.module';
import { mongoConfig } from './config/mongo.config'; // Asegúrate de tener este archivo
import { ReviewsModule } from './reviews/reviews.module';
import { QuestionsAndAnswersModule } from './questionsAndAnswers/questionsAndAnswers.module';

@Module({
  imports: [
    PlacesModule,
    ReviewsModule,
    QuestionsAndAnswersModule,
    SequelizeModule.forRoot(mysqlConfig),
    CategoriesModule,
    TagsModule,
    PlaceTagsModule,
    MongooseModule.forRoot(mongoConfig.uri, mongoConfig.options),
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Conexión con MySQL y MongoDB iniciada correctamente');
  }
}
