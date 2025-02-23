import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema()
export class Review {
  @Prop({ required: true })
  placeId: string;
  
  @Prop({ required: true })
  user: string;
  
  @Prop({ required: true, min: 1, max: 5 })
  rating: number;
  
  @Prop()
  comment: string;
}

export const ReviewSchema = SchemaFactory.createForClass(Review);