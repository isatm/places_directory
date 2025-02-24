import { IsString, IsOptional } from 'class-validator';
/**
 * DTO para la actualización de una categoria.
 * Define todas las propiedades como opcionales para permitir actualizaciones parciales.
 */
export class UpdateCategoryDto {
  @IsString()
  @IsOptional()
  cat_name?: string;
}
