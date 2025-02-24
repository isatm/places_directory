import { IsString, IsNotEmpty } from 'class-validator';

/**
 * DTO para la creación de una categoria.
 * Define las propiedades requeridas y sus validaciones para garantizar la integridad de los datos recibidos.
 */
export class CreateCategoryDto {
  @IsString()
  @IsNotEmpty()
  cat_name: string;
}
