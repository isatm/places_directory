import {
  Controller,
  Post,
  Body,
  UploadedFiles,
  UseInterceptors,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { FilesInterceptor } from '@nestjs/platform-express';
import { ReviewsService } from './reviews.service';
import { File, Multer } from 'multer';
import { Express } from 'express';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

@Controller('reviews')
export class ReviewsController {
  constructor(private readonly reviewsService: ReviewsService) {}

  // Crear una reseña con archivos multimedia
  @Post()
  @UseInterceptors(FilesInterceptor('files'))
  async create(
    @UploadedFiles() files: Multer.File[],
  ) {
    const createReviewDto = new CreateReviewDto();
    return this.reviewsService.create(createReviewDto, files);
  }

  // Obtener todas las reseñas de un lugar
  @Get('place/:placeId')
  findAllByPlaceId(@Param('placeId') placeId: string) {
    return this.reviewsService.findAllByPlaceId(placeId);
  }

  // Obtener una reseña por su ID
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  // Actualizar una reseña
  @Put(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  // Eliminar una reseña
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}