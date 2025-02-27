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
   * @param files Archivos multimedia subidos.
   * @returns La reseña creada.
   */
  //TODO

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
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reviewsService.findOne(id);
  }

  /**
   * Actualiza una reseña existente.
   * @param id Identificador de la reseña a actualizar.
   * @param updateReviewDto Datos a actualizar en la reseña.
   * @returns La reseña actualizada.
   */
  @Put(':id')
  update(@Param('id') id: string, @Body() updateReviewDto: UpdateReviewDto) {
    return this.reviewsService.update(id, updateReviewDto);
  }

  /**
   * Elimina una reseña por su identificador.
   * @param id Identificador de la reseña a eliminar.
   * @returns La reseña eliminada o null si no existe.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reviewsService.remove(id);
  }
}
