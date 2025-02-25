import { Controller, Post, Get, Delete, Body } from '@nestjs/common';
import { PlaceTagsService } from './place-tags.service';
import { CreatePlaceTagDto } from './dto/CreatePlaceTag.dto';
import { DeletePlaceTagDto } from './dto/DeletePlaceTag.dto';
import { PlaceTag } from './place-tags.entity';

@Controller('place-tags')
export class PlaceTagsController {
  constructor(private readonly placeTagsService: PlaceTagsService) {}

  /**
   * ✅ Asigna una etiqueta a un lugar.
   */
  @Post()
  create(@Body() createPlaceTagDto: CreatePlaceTagDto): Promise<PlaceTag> {
    return this.placeTagsService.create(createPlaceTagDto);
  }

  /**
   * ✅ Obtiene todas las relaciones `PlaceTag`.
   */
  @Get()
  findAll(): Promise<PlaceTag[]> {
    return this.placeTagsService.findAll();
  }

  /**
   * ✅ Elimina la relación entre un lugar y una etiqueta.
   */
  @Delete()
  remove(@Body() deletePlaceTagDto: DeletePlaceTagDto): Promise<void> {
    return this.placeTagsService.remove(deletePlaceTagDto);
  }
}
