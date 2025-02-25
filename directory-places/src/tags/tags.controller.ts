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
import { TagsService } from './tags.service';
import { CreateTagDto } from './dto/CreateTag.dto';
import { UpdateTagDto } from './dto/UpdateTag.dto';
import { Tag } from './tags.entity';

@Controller('tags')
export class TagsController {
  constructor(private readonly tagsService: TagsService) {}

  /**
   * Crea una nueva etiqueta.
   * @param createTagDto Datos de la etiqueta a crear.
   * @returns La etiqueta creada.
   */
  @Post()
  create(@Body() createTagDto: CreateTagDto): Promise<Tag> {
    return this.tagsService.create(createTagDto);
  }

  /**
   * Obtiene todas las etiquetas disponibles.
   * @returns Lista de etiquetas.
   */
  @Get()
  findAll(): Promise<Tag[]> {
    return this.tagsService.findAll();
  }

  /**
   * Obtiene una etiqueta específica por su ID.
   * @param id Identificador único de la etiqueta.
   * @returns La etiqueta correspondiente.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Tag> {
    return this.tagsService.findOne(id);
  }

  /**
   * Actualiza una etiqueta existente por su ID.
   * @param id Identificador único de la etiqueta a actualizar.
   * @param updateTagDto Datos actualizados de la etiqueta.
   * @returns La etiqueta actualizada.
   */
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateTagDto: UpdateTagDto,
  ): Promise<Tag> {
    return this.tagsService.update(id, updateTagDto);
  }

  /**
   * Elimina una etiqueta por su ID.
   * @param id Identificador único de la etiqueta a eliminar.
   * @returns Una promesa vacía cuando la etiqueta ha sido eliminada.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.tagsService.remove(id);
  }
}
