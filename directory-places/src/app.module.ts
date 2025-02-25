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
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => {
        // Usar una URI con formato de red Docker en lugar de hostname
        // Reemplaza 'mongodb' con tu servicio real en docker-compose
        return {
          uri: 'mongodb://isa:12345@mongodb:27017/open_directory?authSource=admin',
          connectTimeoutMS: 20000,
          serverSelectionTimeoutMS: 30000,
        };
      },
      inject: [ConfigService],
    }),
  ],
})
export class AppModule implements OnModuleInit {
  private readonly logger = new Logger(AppModule.name);
  
  onModuleInit() {
    this.logger.log('✅ Aplicación inicializada correctamente');
  }
}