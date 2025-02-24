import { Module, OnModuleInit } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { MongooseModule } from '@nestjs/mongoose';
import { mysqlConfig } from './config/database.config';
import { mongoConfig } from './config/mongo.config'; // Asegúrate de tener este archivo
import { ReviewsModule } from './reviews/reviews.module';
import { QuestionsModule } from './questions/questions.module';
import { AnswersModule } from './answers/answers.module';


@Module({
  imports: [
    PlacesModule,
    ReviewsModule, 
    QuestionsModule, 
    AnswersModule,
    TypeOrmModule.forRoot(mysqlConfig), // Configuración de MySQL
    MongooseModule.forRoot(mongoConfig.uri, mongoConfig.options), // Configuración de MongoDB
  ],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Conexión con MySQL y MongoDB iniciada correctamente');
  }
}
