import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Review } from './reviews.schema';
import { CreateReviewDto } from './dto/create-review.dto';
import { UpdateReviewDto } from './dto/update-review.dto';

/**
 * Servicio para gestionar las reseñas en la aplicación.
 */
@Injectable()
export class ReviewsService {
  /**
   * Constructor del servicio de reseñas.
   * @param reviewModel Modelo de Mongoose para la entidad Review.
   */
  constructor(
    @InjectModel(Review.name)
    private readonly reviewModel: Model<Review>,
  ) {}

  /**
   * Crea una nueva reseña con archivos multimedia opcionales.
   * @param createReviewDto Datos para la creación de la reseña.
   * @returns La reseña creada y guardada en la base de datos.
   */
  async create(createReviewDto: CreateReviewDto) {
    const createdReview = new this.reviewModel({
      ...createReviewDto,
    });
    return createdReview.save();
  }

  /**
   * Obtiene todas las reseñas asociadas a un lugar específico.
   * @param placeId Identificador del lugar.
   * @returns Lista de reseñas del lugar.
   */
  async findAllByPlaceId(placeId: string) {
    return this.reviewModel.find({ placeId }).exec();
  }

  /**
   * Obtiene una reseña por su identificador.
   * @param id Identificador de la reseña.
   * @returns La reseña encontrada o null si no existe.
   */
  async findOne(id: string) {
    return this.reviewModel.findById(id).exec();
  }

  /**
   * Obtiene una reseña por su reviewId.
   * @param reviewId Identificador único de la reseña.
   * @returns La reseña encontrada o null si no existe.
   */
  async findOneByReviewId(reviewId: string) {
    return this.reviewModel.findOne({ reviewId }).exec();
  }

  /**
   * Actualiza una reseña existente.
   * @param id Identificador de la reseña a actualizar.
   * @param updateReviewDto Datos a actualizar en la reseña.
   * @returns La reseña actualizada.
   */
  async update(id: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewModel
      .findByIdAndUpdate(id, updateReviewDto, { new: true })
      .exec();
  }

  /**
   * Actualiza una reseña existente por su reviewId.
   * @param reviewId Identificador único de la reseña a actualizar.
   * @param updateReviewDto Datos a actualizar en la reseña.
   * @returns La reseña actualizada.
   */
  async updateByReviewId(reviewId: string, updateReviewDto: UpdateReviewDto) {
    return this.reviewModel
      .findOneAndUpdate({ reviewId }, updateReviewDto, { new: true })
      .exec();
  }

  /**
   * Elimina una reseña por su identificador.
   * @param id Identificador de la reseña a eliminar.
   * @returns La reseña eliminada o null si no existe.
   */
  async remove(id: string) {
    return this.reviewModel.findByIdAndDelete(id).exec();
  }

  /**
   * Elimina una reseña por su reviewId.
   * @param reviewId Identificador único de la reseña a eliminar.
   * @returns La reseña eliminada o null si no existe.
   */
  async removeByReviewId(reviewId: string) {
    return this.reviewModel.findOneAndDelete({ reviewId }).exec();
  }
}
