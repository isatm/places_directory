import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as dotenv from 'dotenv';

dotenv.config();
console.log('MONGO_URI:', process.env.MONGO_URI); 

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Validación automática de DTOs
  app.useGlobalPipes(
    new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }),
  );

  const port = process.env.PORT || 4000;
  await app.listen(port);
  console.log(`🚀 Server running on http://localhost:${port}`);
}
bootstrap();
