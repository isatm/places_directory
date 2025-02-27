import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Req,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/CreatePlace.dto';
import { UpdatePlaceDto } from './dto/UpdatePlace.dto';
import { Place } from './places.entity';
import { SqlTrackerService } from '../history/sql-tracker.service';
import { Request } from 'express';

interface CustomRequest extends Request {
  user?: {
    id: string;
  };
}

@Controller('places')
export class PlacesController {
  constructor(
    private readonly placesService: PlacesService,
    private readonly sqlTracker: SqlTrackerService,
  ) {}

  /**
   * Endpoint para crear un nuevo lugar.
    @Req() req: CustomRequest
   * @returns El lugar creado.
   */
  @Post()
  async create(
    @Body() createPlaceDto: CreatePlaceDto, 
    @Req() req: Request
  ): Promise<Place> {
    const newPlace = await this.placesService.create(createPlaceDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'places',                // Nombre de la tabla
      'INSERT',                // Tipo de operación
      createPlaceDto,          // Datos enviados
      newPlace.place_id,       // ID de la entidad
      undefined,               // ID del usuario (no disponible)
    );
    
    return newPlace;
  }

  /**
   * Endpoint para obtener todos los lugares registrados.
   * @returns Lista de lugares.
   */
  @Get()
  async findAll(): Promise<Place[]> {
    return this.placesService.findAll();
  }

  /**
   * Endpoint para obtener un lugar por su ID.
   * @param id Identificador del lugar.
   * @returns El lugar encontrado.
   */
  @Get(':id')
  async findOne(@Param('id') id: string): Promise<Place> {
    return this.placesService.findOne(+id);
  }

  /**
   * Endpoint para actualizar un lugar por su ID.
   * @param id Identificador del lugar.
   * @param updatePlaceDto Datos a actualizar.
   * @returns El lugar actualizado.
   */
  @Patch(':id')
  async update(
    @Param('id') id: string,
    @Body() updatePlaceDto: UpdatePlaceDto,
    @Req() req: Request
  ): Promise<Place> {
    // Opcionalmente, obtener datos originales antes de actualizar
    const originalPlace = await this.placesService.findOne(+id);
    
    const updatedPlace = await this.placesService.update(+id, updatePlaceDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'places',                // Nombre de la tabla
      'UPDATE',                // Tipo de operación
      updatePlaceDto,          // Datos de actualización
      id,                      // ID de la entidad
      undefined,           // ID del usuario (si está disponible)
    );
    
    return updatedPlace;
  }

  /**
   * Endpoint para eliminar un lugar por su ID.
   * @param id Identificador del lugar.
   */
  @Delete(':id')
  async remove(
    @Param('id') id: string,
    @Req() req: Request
  ): Promise<void> {
    // Obtener los datos antes de eliminar
    const placeToDelete = await this.placesService.findOne(+id);
    
    await this.placesService.remove(+id);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'places',                // Nombre de la tabla
      'DELETE',                // Tipo de operación
      placeToDelete,           // Datos de la entidad eliminada
      undefined,                // ID de la entidad
    );
  }
}