import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionDocument = HydratedDocument<Question>;

@Schema({ timestamps: true })
export class Question {
  @Prop({ required: true })
  placeId: string; // ID del lugar al que pertenece la pregunta

  @Prop({ required: true })
  user: string; // Usuario que hizo la pregunta

  @Prop({ required: true })
  text: string; // Texto de la pregunta
}

export const QuestionSchema = SchemaFactory.createForClass(Question);
