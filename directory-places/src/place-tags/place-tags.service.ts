import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { PlaceTag } from './place-tags.entity';
import { CreatePlaceTagDto } from './dto/CreatePlaceTag.dto';
import { DeletePlaceTagDto } from './dto/DeletePlaceTag.dto';

@Injectable()
export class PlaceTagsService {
  constructor(
    @InjectModel(PlaceTag)
    private readonly placeTagRepository: typeof PlaceTag,
  ) {}

  /**
   * ✅ Asigna una etiqueta a un lugar.
   */
  async create(createPlaceTagDto: CreatePlaceTagDto): Promise<PlaceTag> {
    return this.placeTagRepository.create(createPlaceTagDto as any);
  }

  /**
   * ✅ Obtiene todas las relaciones `PlaceTag`.
   */
  async findAll(): Promise<PlaceTag[]> {
    return this.placeTagRepository.findAll();
  }

  /**
   * ✅ Elimina la relación entre un lugar y una etiqueta.
   */
  async remove(deletePlaceTagDto: DeletePlaceTagDto): Promise<void> {
    await this.placeTagRepository.destroy({
      where: {
        place_id: deletePlaceTagDto.place_id,
        tag_id: deletePlaceTagDto.tag_id,
      },
    });
  }
}
