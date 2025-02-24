import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/sequelize';
import { Category } from './categories.entity';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { UpdateCategoryDto } from './dto/UpdateCategory.dto';

@Injectable()
export class CategoriesService {
  constructor(
    @InjectModel(Category)
    private readonly categoryRepository: typeof Category,
  ) {}

  /**
   * Crea una nueva categoría en la base de datos.
   * @param createCategoryDto Datos de la categoría a crear.
   * @returns La categoría creada.
   */
  async create(createCategoryDto: CreateCategoryDto): Promise<Category> {
    const category = await this.categoryRepository.create({
      cat_name: createCategoryDto.cat_name,
    } as any);
    return category;
  }

  /**
   * Obtiene todas las categorías almacenadas en la base de datos.
   * @returns Lista de todas las categorías.
   */
  async findAll(): Promise<Category[]> {
    return this.categoryRepository.findAll();
  }

  /**
   * Obtiene una categoría por su ID.
   * @param id Identificador único de la categoría.
   * @returns La categoría correspondiente al ID proporcionado.
   * @throws NotFoundException Si no se encuentra la categoría.
   */
  async findOne(id: number): Promise<Category> {
    const category = await this.categoryRepository.findByPk(id);
    if (!category) {
      throw new NotFoundException(`Categoría con ID ${id} no encontrada`);
    }
    return category;
  }

  /**
   * Actualiza una categoría en la base de datos.
   * @param id Identificador de la categoría a actualizar.
   * @param updateCategoryDto Datos actualizados de la categoría.
   * @returns La categoría actualizada.
   * @throws NotFoundException Si la categoría no existe.
   */
  async update(
    id: number,
    updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const category = await this.findOne(id);

    await category.update({
      cat_name: updateCategoryDto.cat_name,
    });

    return category;
  }

  /**
   * Elimina una categoría por su ID.
   * @param id Identificador único de la categoría a eliminar.
   * @returns Una promesa vacía cuando la categoría ha sido eliminada.
   * @throws NotFoundException Si la categoría no existe.
   */
  async remove(id: number): Promise<void> {
    const category = await this.findOne(id);
    await category.destroy();
  }
}
