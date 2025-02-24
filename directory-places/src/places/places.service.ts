import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Place } from './places.entity';
import { CreatePlaceDto } from './dto/CreatePlace.dto';
import { UpdatePlaceDto } from './dto/UpdatePlace.dto';

@Injectable()
export class PlacesService {
  constructor(
    @InjectModel(Place)
    private readonly placeModel: typeof Place,
  ) {}

  /**
   * Crea un nuevo lugar en la base de datos.
   * @param createPlaceDto Datos del nuevo lugar.
   * @returns El lugar creado.
   */
  async create(createPlaceDto: CreatePlaceDto): Promise<Place> {
    // Convertir DTO a objeto plano
    const place = await this.placeModel.create({ ...createPlaceDto });

    // Si hay tags, asociarlos al lugar
    if (createPlaceDto.tags?.length) {
      await place.$set('tags', createPlaceDto.tags);
    }

    return place;
  }

  /**
   * Obtiene todos los lugares registrados en la base de datos.
   * @returns Lista de lugares.
   */
  async findAll(): Promise<Place[]> {
    return this.placeModel.findAll();
  }

  /**
   * Busca un lugar por su ID.
   * @param id Identificador del lugar.
   * @returns El lugar encontrado.
   * @throws NotFoundException si el lugar no existe.
   */
  async findOne(id: number): Promise<Place> {
    const place = await this.placeModel.findByPk(id);
    if (!place) {
      throw new NotFoundException(`El lugar con ID ${id} no fue encontrado.`);
    }
    return place;
  }

  /**
   * Actualiza un lugar existente por su ID.
   * @param id Identificador del lugar.
   * @param updatePlaceDto Datos a actualizar.
   * @returns El lugar actualizado.
   * @throws NotFoundException si el lugar no existe.
   */
  async update(id: number, updatePlaceDto: UpdatePlaceDto): Promise<Place> {
    const place = await this.findOne(id);
    await place.update(updatePlaceDto);
    return place;
  }

  /**
   * Elimina un lugar por su ID.
   * @param id Identificador del lugar.
   * @throws NotFoundException si el lugar no existe.
   */
  async remove(id: number): Promise<void> {
    const place = await this.findOne(id);
    await place.destroy();
  }
}
