import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ReviewsController } from './reviews.controller';
import { FileModule } from '../file/file.module';
import { ReviewsService } from './reviews.service';
import { Review, ReviewSchema } from './reviews.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: Review.name, schema: ReviewSchema }]), FileModule],
  controllers: [ReviewsController],
  providers: [ReviewsService],
})
export class ReviewsModule {}
