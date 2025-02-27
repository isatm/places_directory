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
import { SqlTrackerService } from '../history/sql-tracker.service';

/**
 * Controlador para gestionar las categorías.
 * Proporciona endpoints para crear, obtener, actualizar y eliminar categorías.
 */
@Controller('categories')
export class CategoriesController {
  constructor(
    private readonly categoriesService: CategoriesService,
    private readonly sqlTracker: SqlTrackerService,
  ) {}

  /**
   * Crea una nueva categoría.
   * @param createCategoryDto Datos de la categoría a crear.
   * @returns La categoría creada.
   */
  @Post()
  async create(@Body() createCategoryDto: CreateCategoryDto): Promise<Category> {
    const newCategory = await this.categoriesService.create(createCategoryDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'categories',            // Nombre de la tabla
      'INSERT',                // Tipo de operación
      createCategoryDto,       // Datos enviados
      newCategory.id,          // ID de la entidad
      undefined,               // ID del usuario (no disponible)
    );
    
    return newCategory;
  }

  /**
   * Obtiene todas las categorías registradas.
   * @returns Lista de categorías.
   */
  @Get()
  async findAll(): Promise<Category[]> {
    const categories = await this.categoriesService.findAll();
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'categories',            // Nombre de la tabla
      'SELECT',                // Tipo de operación
      {},                      // Datos de la operación (vacío para SELECT)
      undefined,               // ID de la entidad (no aplica para SELECT)
      undefined,               // ID del usuario (si está disponible)
    );
    
    return categories;
  }

  /**
   * Obtiene una categoría por su ID.
   * @param id Identificador de la categoría a buscar.
   * @returns La categoría correspondiente al ID proporcionado.
   */
  @Get(':id')
  async findOne(@Param('id', ParseIntPipe) id: number): Promise<Category> {
    const category = await this.categoriesService.findOne(id);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'categories',            // Nombre de la tabla
      'SELECT',                // Tipo de operación
      { id },                  // Datos de la operación
      id,                      // ID de la entidad
      undefined,               // ID del usuario (si está disponible)
    );
    
    return category;
  }

  /**
   * Actualiza una categoría existente.
   * @param id Identificador de la categoría a actualizar.
   * @param updateCategoryDto Datos a modificar en la categoría.
   * @returns La categoría actualizada.
   */
  @Put(':id')
  async update(
    @Param('id', ParseIntPipe) id: number,
    @Body() updateCategoryDto: UpdateCategoryDto,
  ): Promise<Category> {
    const updatedCategory = await this.categoriesService.update(id, updateCategoryDto);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'categories',            // Nombre de la tabla
      'UPDATE',                // Tipo de operación
      updateCategoryDto,       // Datos de actualización
      id,                      // ID de la entidad
      undefined,               // ID del usuario (si está disponible)
    );
    
    return updatedCategory;
  }

  /**
   * Elimina una categoría por su ID.
   * @param id Identificador de la categoría a eliminar.
   * @returns Una promesa que indica si la operación fue exitosa.
   */
  @Delete(':id')
  async remove(@Param('id', ParseIntPipe) id: number): Promise<void> {
    const categoryToDelete = await this.categoriesService.findOne(id);
    
    await this.categoriesService.remove(id);
    
    // Registrar la operación en el historial
    await this.sqlTracker.trackSqlOperation(
      'categories',            // Nombre de la tabla
      'DELETE',                // Tipo de operación
      categoryToDelete,        // Datos de la entidad eliminada
      id,                      // ID de la entidad
      undefined,               // ID del usuario (si está disponible)
    );
  }
}
