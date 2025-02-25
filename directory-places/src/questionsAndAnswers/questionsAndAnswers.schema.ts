import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type QuestionsAndAnswersDocument = HydratedDocument<QuestionsAndAnswers>;

@Schema({ timestamps: true })
export class QuestionsAndAnswers {
  @Prop({ required: true })
  placeId: string; 
  
  @Prop({ required: true })
  user: string;

  @Prop()
  questionText: string; 

  @Prop()
  answerText: string;

  @Prop()
  parentId: string;
}

export const QuestionsAndAnswersSchema = SchemaFactory.createForClass(QuestionsAndAnswers);