import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PlacesService } from './places.service';
import { CreatePlaceDto } from './dto/CreatePlace.dto';
import { UpdatePlaceDto } from './dto/UpdatePlace.dto';
import { Place } from './places.entity';

@Controller('places')
export class PlacesController {
  constructor(private readonly placesService: PlacesService) {}

  /**
   * Endpoint para crear un nuevo lugar.
   * @param createPlaceDto Datos del lugar a crear.
   * @returns El lugar creado.
   */
  @Post()
  async create(@Body() createPlaceDto: CreatePlaceDto): Promise<Place> {
    return this.placesService.create(createPlaceDto);
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
  ): Promise<Place> {
    return this.placesService.update(+id, updatePlaceDto);
  }

  /**
   * Endpoint para eliminar un lugar por su ID.
   * @param id Identificador del lugar.
   */
  @Delete(':id')
  async remove(@Param('id') id: string): Promise<void> {
    return this.placesService.remove(+id);
  }
}
