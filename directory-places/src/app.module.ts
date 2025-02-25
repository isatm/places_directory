import { Module, OnModuleInit, Logger } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { MongooseModule } from '@nestjs/mongoose';
import { mysqlConfig } from './config/database.config';
import { CategoriesModule } from './categories/categories.module';
import { TagsModule } from './tags/tags.module';
import { PlaceTagsModule } from './place-tags/place-tags.module';
import { ReviewsModule } from './reviews/reviews.module';
import { QuestionsAndAnswersModule } from './questionsAndAnswers/questionsAndAnswers.module';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MediaModule } from './media/media.module';
import { mongoConfig } from './config/mongo.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    PlacesModule,
    ReviewsModule,
    QuestionsAndAnswersModule,
    SequelizeModule.forRoot(mysqlConfig),
    CategoriesModule,
    TagsModule,
    PlaceTagsModule,
    MongooseModule.forRoot(mongoConfig.uri, mongoConfig.options),
    MediaModule,
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);
  
  onModuleInit() {
    this.logger.log('✅ Aplicación inicializada correctamente');
  }
}