import { Controller, Get, Param, Query } from '@nestjs/common';
import { SqlTrackerService } from './sql-tracker.service';
import { HistoryDocument } from './history.schema';

@Controller('sql-history')
export class SqlTrackerController {
  constructor(private readonly sqlTrackerService: SqlTrackerService) {}

  /**
   * Obtiene el historial de operaciones SQL para una tabla específica
   * @param tableName Nombre de la tabla
   * @param limit Límite de resultados (opcional)
   */
  @Get('table/:tableName')
  getHistoryByTable(
    @Param('tableName') tableName: string,
    @Query('limit') limit?: number,
  ): Promise<HistoryDocument[]> {
    return this.sqlTrackerService.getHistoryByTable(tableName, limit ? +limit : undefined);
  }

  /**
   * Obtiene el historial de operaciones SQL para una entidad específica
   * @param entityId ID de la entidad
   * @param tableName Nombre de la tabla (opcional)
   */
  @Get('entity/:entityId')
  getHistoryByEntity(
    @Param('entityId') entityId: string,
    @Query('tableName') tableName?: string,
  ): Promise<HistoryDocument[]> {
    return this.sqlTrackerService.getHistoryByEntity(entityId, tableName);
  }

  /**
   * Obtiene el historial de operaciones SQL realizadas por un usuario
   * @param userId ID del usuario
   * @param limit Límite de resultados (opcional)
   */
  @Get('user/:userId')
  getHistoryByUser(
    @Param('userId') userId: string,
    @Query('limit') limit?: number,
  ): Promise<HistoryDocument[]> {
    return this.sqlTrackerService.getHistoryByUser(userId, limit ? +limit : undefined);
  }
}