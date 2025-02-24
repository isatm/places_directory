import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review, ReviewDocument } from './reviews.schema';
import { CreateReviewDto } from './dto/create-review.dto';

@Injectable()
export class ReviewsService {
  constructor(@InjectModel(Review.name) private reviewModel: Model<ReviewDocument>) {}

  async create(createReviewDto: CreateReviewDto): Promise<Review> {
    const newReview = new this.reviewModel(createReviewDto);
    return newReview.save();
  }

  async findAll(): Promise<Review[]> {
    return this.reviewModel.find().exec();
  }
}