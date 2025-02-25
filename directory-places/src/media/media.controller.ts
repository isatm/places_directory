import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { MediaService } from './media.service';
import { CreateMediaDto } from './dto/CreateMedia.dto';
import { UpdateMediaDto } from './dto/UpdateMedia.dto';
import { Media } from './media.entity';

@Controller('media')
export class MediaController {
  constructor(private readonly mediaService: MediaService) {}

  /**
   *  Endpoint para crear una nueva imagen.
   *
   * @param createMediaDto - Datos de la imagen.
   * @returns La imagen creada.
   */
  @Post()
  create(@Body() createMediaDto: CreateMediaDto): Promise<Media> {
    return this.mediaService.create(createMediaDto);
  }

  /**
   *  Endpoint para obtener todas las imágenes.
   *
   * @returns Lista de imágenes almacenadas.
   */
  @Get()
  findAll(): Promise<Media[]> {
    return this.mediaService.findAll();
  }

  /**
   *  Endpoint para obtener una imagen por su ID.
   *
   * @param id - ID de la imagen a consultar.
   * @returns La imagen encontrada.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Media> {
    return this.mediaService.findOne(id);
  }

  /**
   *  Endpoint para actualizar una imagen por su ID.
   *
   * @param id - ID de la imagen a actualizar.
   * @param updateMediaDto - Datos a modificar.
   * @returns La imagen actualizada.
   */
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateMediaDto: UpdateMediaDto,
  ): Promise<Media> {
    return this.mediaService.update(id, updateMediaDto);
  }

  /**
   *  Endpoint para eliminar una imagen por su ID.
   *
   * @param id - ID de la imagen a eliminar.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.mediaService.remove(id);
  }
}
