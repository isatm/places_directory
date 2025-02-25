import { Injectable } from '@nestjs/common';
import { Express } from 'express';
import { InjectModel } from '@nestjs/mongoose';
import { Multer } from 'multer';
import { Model } from 'mongoose';
import { Review } from './reviews.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';
import { FileService } from '../file/file.service';

@Injectable()
export class ReviewsService {
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<Review>,
    private readonly fileService: FileService,
  ) {}

  async create(createReviewDto: CreateReviewDto, files: Multer.File[]) {
    const fileIds = await Promise.all(
      files.map((file) => this.fileService.uploadFile(file)),
    );

    const createdReview = new this.reviewModel({
      ...createReviewDto,
      multimedia: fileIds,
    });

    return createdReview.save();
  }

  // Obtener todas las reseñas de un lugar
  async findAllByPlaceId(placeId: string) {
    return this.reviewModel.find({ placeId }).exec();
  }

  // Obtener una reseña por su ID
  async findOne(id: string) {
    return this.reviewModel.findById(id).exec();
  }

  // Actualizar una reseña
  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .exec();
  }

  // Eliminar una reseña
  async remove(id: string) {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }
}