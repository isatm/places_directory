import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

/**
 * Documento de Mongoose para la entidad QuestionsAndAnswers.
 */
export type QuestionsAndAnswersDocument = HydratedDocument<QuestionsAndAnswers>;

/**
 * Esquema de preguntas y respuestas en la base de datos.
 * Almacena preguntas realizadas por los usuarios y sus respuestas.
 */
@Schema({ timestamps: true })
export class QuestionsAndAnswers {
  /**
   * Identificador del lugar al que pertenece la pregunta o respuesta.
   */
  @Prop({ required: true })
  placeId: string;

  /**
   * Identificador del usuario que realizó la pregunta o respuesta.
   */
  @Prop({ required: true })
  user: string;

  /**
   * Texto de la pregunta realizada por el usuario.
   */
  @Prop()
  questionText: string;

  /**
   * Texto de la respuesta proporcionada a una pregunta.
   */
  @Prop()
  answerText: string;

  /**
   * Identificador de la pregunta a la que responde este registro (si es una respuesta).
   */
  @Prop()
  parentId: string;
}

/**
 * Esquema de Mongoose generado a partir de la clase QuestionsAndAnswers.
 */
export const QuestionsAndAnswersSchema =
  SchemaFactory.createForClass(QuestionsAndAnswers);
