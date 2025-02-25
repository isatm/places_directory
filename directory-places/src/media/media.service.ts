import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Media } from './media.entity';
import { CreateMediaDto } from './dto/CreateMedia.dto';
import { UpdateMediaDto } from './dto/UpdateMedia.dto';

@Injectable()
export class MediaService {
  constructor(
    @InjectModel(Media)
    private readonly mediaRepository: typeof Media,
  ) {}

  /**
   * 📌 Crear una nueva imagen asociada a un lugar.
   *
   * @param createMediaDto - Datos de la imagen a almacenar.
   * @returns La imagen creada.
   */
  async create(createMediaDto: CreateMediaDto): Promise<Media> {
    return await this.mediaRepository.create(createMediaDto as any);
  }

  /**
   *  Obtener todas las imágenes almacenadas en la base de datos.
   *
   * @returns Lista de imágenes.
   */
  async findAll(): Promise<Media[]> {
    return await this.mediaRepository.findAll();
  }

  /**
   *  Obtener una imagen por su ID.
   *
   * @param id - Identificador único de la imagen.
   * @returns La imagen encontrada.
   * @throws NotFoundException si la imagen no existe.
   */
  async findOne(id: number): Promise<Media> {
    const media = await this.mediaRepository.findByPk(id);
    if (!media) {
      throw new NotFoundException(`Imagen con ID ${id} no encontrada`);
    }
    return media;
  }

  /**
   *  Actualizar una imagen por su ID.
   *
   * @param id - ID de la imagen a actualizar.
   * @param updateMediaDto - Datos a modificar.
   * @returns La imagen actualizada.
   */
  async update(id: number, updateMediaDto: UpdateMediaDto): Promise<Media> {
    const media = await this.findOne(id);
    await media.update(updateMediaDto);
    return media;
  }

  /**
   *  Eliminar una imagen por su ID.
   *
   * @param id - ID de la imagen a eliminar.
   * @throws NotFoundException si la imagen no existe.
   */
  async remove(id: number): Promise<void> {
    const media = await this.findOne(id);
    await media.destroy();
  }
}
