import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Tag } from './tags.entity';
import { CreateTagDto } from './dto/CreateTag.dto';
import { UpdateTagDto } from './dto/UpdateTag.dto';

@Injectable()
export class TagsService {
  constructor(
    @InjectModel(Tag)
    private readonly tagRepository: typeof Tag,
  ) {}

  /**
   * Crea una nueva etiqueta en la base de datos.
   * @param createTagDto Datos de la etiqueta a crear.
   * @returns La etiqueta creada.
   */
  async create(createTagDto: CreateTagDto): Promise<Tag> {
    const tag = await this.tagRepository.create({
      tag_name: createTagDto.tag_name,
    } as any);
    return tag;
  }

  /**
   * Obtiene todas las etiquetas almacenadas en la base de datos.
   * @returns Lista de todas las etiquetas.
   */
  async findAll(): Promise<Tag[]> {
    return this.tagRepository.findAll();
  }

  /**
   * Obtiene una etiqueta por su ID.
   * @param id Identificador único de la etiqueta.
   * @returns La etiqueta correspondiente al ID proporcionado.
   * @throws NotFoundException Si no se encuentra la etiqueta.
   */
  async findOne(id: number): Promise<Tag> {
    const tag = await this.tagRepository.findByPk(id);
    if (!tag) {
      throw new NotFoundException(`Etiqueta con ID ${id} no encontrada`);
    }
    return tag;
  }

  /**
   * Actualiza una etiqueta en la base de datos.
   * @param id Identificador de la etiqueta a actualizar.
   * @param updateTagDto Datos actualizados de la etiqueta.
   * @returns La etiqueta actualizada.
   * @throws NotFoundException Si la etiqueta no existe.
   */
  async update(id: number, updateTagDto: UpdateTagDto): Promise<Tag> {
    const tag = await this.findOne(id);
    await tag.update(updateTagDto);
    return tag;
  }

  /**
   * Elimina una etiqueta por su ID.
   * @param id Identificador único de la etiqueta a eliminar.
   * @returns Una promesa vacía cuando la etiqueta ha sido eliminada.
   * @throws NotFoundException Si la etiqueta no existe.
   */
  async remove(id: number): Promise<void> {
    const tag = await this.findOne(id);
    await tag.destroy();
  }
}
