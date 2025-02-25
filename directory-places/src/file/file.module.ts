import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { FileController } from './file.controller';
import { FileService } from './file.service';
/**
 * Modulo de file
 */
@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nest')],
  controllers: [FileController],
  providers: [FileService],
  exports: [FileService],
})
export class FileModule {}
