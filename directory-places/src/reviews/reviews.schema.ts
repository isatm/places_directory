import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type ReviewDocument = HydratedDocument<Review>;

@Schema({ timestamps: true })
export class Review {
  @Prop({ required: true })
  placeId: string;

  @Prop({ required: true })
  user: string;

  @Prop({ required: true, min: 1, max: 5 })
  rating: number;

  @Prop({ validate: {
    validator: function(v) {
      return this.comment || this.multimedia;
    },
    message: 'Debe proporcionar un comentario o multimedia.'
  }})
  comment: string;

  @Prop({ type: [String] })
  multimedia: string[];
}

export const ReviewSchema = SchemaFactory.createForClass(Review);