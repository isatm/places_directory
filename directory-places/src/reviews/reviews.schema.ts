import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Documento de Mongoose para la entidad Review.
 */
export type ReviewDocument = HydratedDocument<Review>;

/**
 * Esquema de reseñas en la base de datos.
 * Almacena información sobre las reseñas de los lugares.
 */
@Schema({ timestamps: true })
export class Review {
  /**
   * Identificador del lugar al que pertenece la reseña.
   */
  @Prop({ required: true })
  placeId: string;

  /**
   * Identificador del usuario que realizó la reseña.
   */
  @Prop({ required: true })
  user: string;

  /**
   * Puntuación otorgada al lugar, en un rango de 1 a 5.
   */
  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  /**
   * Comentario opcional sobre la reseña.
   * Se requiere al menos un comentario o un archivo multimedia.
   */
  @Prop({
    validate: {
      validator: function (v) {
        return this.comment || this.multimedia;
      },
      message: 'Debe proporcionar un comentario o multimedia.',
    },
  })
  comment: string;

  /**
   * Lista de archivos multimedia asociados a la reseña.
   */
  @Prop({ type: [String] })
  multimedia: string[];
}

/**
 * Esquema de Mongoose generado a partir de la clase Review.
 */
export const ReviewSchema = SchemaFactory.createForClass(Review);
