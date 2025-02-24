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
import { CategoriesService } from './categories.service';
import { CreateCategoryDto } from './dto/CreateCategory.dto';
import { UpdateCategoryDto } from './dto/UpdateCategory.dto';
import { Category } from './categories.entity';

/**
 * Controlador para gestionar las categorías.
 * Proporciona endpoints para crear, obtener, actualizar y eliminar categorías.
 */
@Controller('categories')
export class CategoriesController {
  constructor(private readonly categoriesService: CategoriesService) {}

  /**
   * Crea una nueva categoría.
   * @param createCategoryDto Datos de la categoría a crear.
   * @returns La categoría creada.
   */
  @Post()
  create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    return this.categoriesService.create(createCategoryDto);
  }

  /**
   * Obtiene todas las categorías registradas.
   * @returns Lista de categorías.
   */
  @Get()
  findAll(): Promise<Category[]> {
    return this.categoriesService.findAll();
  }

  /**
   * Obtiene una categoría por su ID.
   * @param id Identificador de la categoría a buscar.
   * @returns La categoría correspondiente al ID proporcionado.
   */
  @Get(':id')
  findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    return this.categoriesService.findOne(id);
  }

  /**
   * Actualiza una categoría existente.
   * @param id Identificador de la categoría a actualizar.
   * @param updateCategoryDto Datos a modificar en la categoría.
   * @returns La categoría actualizada.
   */
  @Put(':id')
  update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    return this.categoriesService.update(id, updateCategoryDto);
  }

  /**
   * Elimina una categoría por su ID.
   * @param id Identificador de la categoría a eliminar.
   * @returns Una promesa que indica si la operación fue exitosa.
   */
  @Delete(':id')
  remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    return this.categoriesService.remove(id);
  }
}
