import { Controller, Get, Post, Body } from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { Review } from './reviews.schema';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  @Post()
  create(@Body() createReviewDto: CreateReviewDto): Promise<Review> {
    return this.reviewsService.create(createReviewDto);
  }

  @Get()
  findAll(): Promise<Review[]> {
    return this.reviewsService.findAll();
  }
}