import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type AnswerDocument = HydratedDocument<Answer>;

@Schema({ timestamps: true })
export class Answer {
  @Prop({ required: true })
  questionId: string; // Referencia a la pregunta

  @Prop({ required: true })
  user: string; // Usuario que responde

  @Prop({ required: true })
  text: string; // Respuesta
}

export const AnswerSchema = SchemaFactory.createForClass(Answer);
