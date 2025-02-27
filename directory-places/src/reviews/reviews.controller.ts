import {
  Controller,
  Post,
  Body,
  Param,
  Get,
  Put,
  Delete,
} from '@nestjs/common';
import { ReviewsService } from './reviews.service';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

/**
 * Controlador para gestionar las reseñas.
 */
@Controller('reviews')
export class ReviewsController {
  /**
   * Constructor del controlador de reseñas.
   * @param reviewsService Servicio de reseñas.
   */
  constructor(private readonly reviewsService: ReviewsService) {}

  /**
   * Crea una nueva reseña con archivos multimedia opcionales.
   * @param createReviewDto Datos para la creación de la reseña.
   * @returns La reseña creada.
   */
  @Post()
  async create(@Body() createReviewDto: CreateReviewDto) {
    const reviewData = { ...createReviewDto };
    if (!reviewData.multimedia) {
      reviewData.multimedia = [];
    }
    return this.reviewsService.create(reviewData);
  }

  /**
   * Obtiene todas las reseñas de un lugar específico.
   * @param placeId Identificador del lugar.
   * @returns Lista de reseñas del lugar.
   */
  @Get('place/:placeId')
  findAllByPlaceId(@Param('placeId') placeId: string) {
    return this.reviewsService.findAllByPlaceId(placeId);
  }

  /**
   * Obtiene una reseña por su identificador.
   * @param id Identificador de la reseña.
   * @returns La reseña encontrada o null si no existe.
   */
  @Get('id/:id')
  findOneById(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  /**
   * Obtiene una reseña por su reviewId.
   * @param reviewId Identificador único de la reseña.
   * @returns La reseña encontrada o null si no existe.
   */
  @Get(':reviewId')
  findOneByReviewId(@Param('reviewId') reviewId: string) {
    return this.reviewsService.findOneByReviewId(reviewId);
  }

  /**
   * Actualiza una reseña existente.
   * @param id Identificador de la reseña a actualizar.
   * @param updateReviewDto Datos a actualizar en la reseña.
   * @returns La reseña actualizada.
   */
  @Put('id/:id')
  updateById(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  /**
   * Actualiza una reseña existente por su reviewId.
   * @param reviewId Identificador único de la reseña a actualizar.
   * @param updateReviewDto Datos a actualizar en la reseña.
   * @returns La reseña actualizada.
   */
  @Put(':reviewId')
  updateByReviewId(@Param('reviewId') reviewId: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.updateByReviewId(reviewId, updateReviewDto);
  }

  /**
   * Elimina una reseña por su identificador.
   * @param id Identificador de la reseña a eliminar.
   * @returns La reseña eliminada o null si no existe.
   */
  @Delete('id/:id')
  removeById(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }

  /**
   * Elimina una reseña por su reviewId.
   * @param reviewId Identificador único de la reseña a eliminar.
   * @returns La reseña eliminada o null si no existe.
   */
  @Delete(':reviewId')
  removeByReviewId(@Param('reviewId') reviewId: string) {
    return this.reviewsService.removeByReviewId(reviewId);
  }
}
