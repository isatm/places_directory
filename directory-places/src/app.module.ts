import { Module, OnModuleInit } from '@nestjs/common';
import { PlacesModule } from './places/places.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { mysqlConfig } from './config/database.config';

@Module({
  imports: [PlacesModule, TypeOrmModule.forRoot(mysqlConfig)],
})
export class AppModule implements OnModuleInit {
  onModuleInit() {
    console.log('✅ Conexión con MySQL iniciada correctamente');
  }
}
