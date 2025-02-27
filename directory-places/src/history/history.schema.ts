import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type HistoryDocument = History & Document;

@Schema({ timestamps: true })
export class History {
  @Prop({ required: true })
  operation: string; // INSERT, UPDATE, DELETE, SELECT, etc.

  @Prop({ required: true })
  tableName: string; // Nombre de la tabla en MySQL

  @Prop({ required: true, type: Object })
  data: any; // Datos involucrados en la operación

  @Prop()
  userId: string; // ID del usuario que realizó la operación (si está disponible)

  @Prop()
  entityId: string; // ID de la entidad modificada en MySQL (si está disponible)

}

export const HistorySchema = SchemaFactory.createForClass(History);