import { Controller, Post, Get, Delete, Body, Param } from '@nestjs/common';
import { PlaceTagsService } from './place-tags.service';
import { CreatePlaceTagDto } from './dto/CreatePlaceTag.dto';
import { DeletePlaceTagDto } from './dto/DeletePlaceTag.dto';
import { PlaceTag } from './place-tags.entity';
import { SqlTrackerService } from '../history/sql-tracker.service';

@Controller('place-tags')
export class PlaceTagsController {
  constructor(
    private readonly placeTagsService: PlaceTagsService,
    private readonly sqlTracker: SqlTrackerService
  ) {}

  /**
   *  Asigna una etiqueta a un lugar.
   */
  @Post()
  async create(@Body() createPlaceTagDto: CreatePlaceTagDto): Promise<PlaceTag> {
    const newPlaceTag = await this.placeTagsService.create(createPlaceTagDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'place_tags',            // Nombre de la tabla
      'INSERT',                // Tipo de operación
      createPlaceTagDto,       // Datos enviados
      newPlaceTag.id,          // ID de la entidad
      undefined,               // ID del usuario (no disponible)
    );
    
    return newPlaceTag;
  }

  /**
   *  Obtiene todas las relaciones `PlaceTag`.
   */
  @Get()
  async findAll(): Promise<PlaceTag[]> {
    const placeTags = await this.placeTagsService.findAll();
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'place_tags',            // Nombre de la tabla
      'SELECT',                // Tipo de operación
      {},                      // Datos de la operación (vacío para SELECT)
      undefined,               // ID de la entidad (no aplica para SELECT)
      undefined,               // ID del usuario (si está disponible)
    );
    
    return placeTags;
  }

  /**
   *  Elimina la relación entre un lugar y una etiqueta.
   */
  @Delete()
  async remove(@Body() deletePlaceTagDto: DeletePlaceTagDto): Promise<void> {
    await this.placeTagsService.remove(deletePlaceTagDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'place_tags',            // Nombre de la tabla
      'DELETE',                // Tipo de operación
      deletePlaceTagDto,       // Datos de la entidad eliminada
      undefined,               // ID de la entidad (no aplica para DELETE)
      undefined,               // ID del usuario (si está disponible)
    );
  }
}
