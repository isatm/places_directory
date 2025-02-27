import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { History, HistoryDocument } from './history.schema';

@Injectable()
export class SqlTrackerService {
  constructor(
    @InjectModel(History.name) private historyModel: Model<HistoryDocument>,
  ) {}

  /**
   * Registra una operación SQL en la colección de history en MongoDB
   * @param tableName Nombre de la tabla en MySQL
   * @param operation Tipo de operación (INSERT, UPDATE, DELETE, etc.)
   * @param data Datos involucrados en la operación
   * @param entityId ID de la entidad (si está disponible)
   * @param userId ID del usuario (si está disponible)
   * @param metadata Metadatos adicionales
   * @returns El documento de historial creado
   */
  async trackSqlOperation(
    tableName: string,
    operation: 'INSERT' | 'UPDATE' | 'DELETE' | 'SELECT' | 'OTHER',
    data: any,
    entityId?: string | number,
    userId?: string,
    metadata?: Record<string, any>,
  ): Promise<HistoryDocument> {
    const entry = new this.historyModel({
      operation,
      tableName,
      data,
      entityId: entityId?.toString(),
      userId,
      metadata: {
        timestamp: new Date(),
        ...metadata,
      },
    });

    return entry.save();
  }

  /**
   * Obtiene el historial de operaciones por tabla
   * @param tableName Nombre de la tabla
   * @param limit Límite de resultados (por defecto 100)
   */
  async getHistoryByTable(tableName: string, limit = 100): Promise<HistoryDocument[]> {
    return this.historyModel
      .find({ tableName })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }

  /**
   * Obtiene el historial de operaciones por entidad
   * @param entityId ID de la entidad
   * @param tableName Opcional, nombre de la tabla
   */
  async getHistoryByEntity(
    entityId: string | number,
    tableName?: string,
  ): Promise<HistoryDocument[]> {
    const query: any = { entityId: entityId.toString() };
    
    if (tableName) {
      query.tableName = tableName;
    }
    
    return this.historyModel
      .find(query)
      .sort({ createdAt: -1 })
      .exec();
  }

  /**
   * Obtiene el historial de operaciones por usuario
   * @param userId ID del usuario
   * @param limit Límite de resultados (por defecto 100)
   */
  async getHistoryByUser(userId: string, limit = 100): Promise<HistoryDocument[]> {
    return this.historyModel
      .find({ userId })
      .sort({ createdAt: -1 })
      .limit(limit)
      .exec();
  }
}