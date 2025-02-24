import {
  IsString,
  IsOptional,
  IsInt,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

/**
 * DTO para la actualización de un lugar.
 * Define todas las propiedades como opcionales para permitir actualizaciones parciales.
 */
export class UpdatePlaceDto {
  /**
   * Nombre del lugar.
   * Es opcional, pero si se proporciona, debe ser una cadena de texto.
   */
  @IsOptional()
  @IsString()
  place_name?: string;

  /**
   * Dirección del lugar.
   * Es opcional, pero si se proporciona, debe ser una cadena de texto válida.
   */
  @IsOptional()
  @IsString()
  place_address?: string;

  /**
   * Tipo de lugar (ejemplo: restaurante, museo, parque, etc.).
   * Es opcional, pero si se proporciona, debe ser una cadena de texto.
   */
  @IsOptional()
  @IsString()
  place_type?: string;

  /**
   * Horarios de operación del lugar.
   * Es opcional, pero si se proporciona, debe ser una cadena de texto.
   */
  @IsOptional()
  @IsString()
  place_hours?: string;

  /**
   * Breve descripción del lugar.
   * Es opcional, pero si se proporciona, debe ser una cadena de caracteres.
   */
  @IsOptional()
  @IsString()
  place_description?: string;

  /**
   * Identificador de la categoría a la que pertenece el lugar.
   * Es opcional, pero si se proporciona, debe ser un número entero válido.
   */
  @IsOptional()
  @IsInt()
  categoryId?: number;

  /**
   * Lista de identificadores de etiquetas (`Tag`).
   * Es opcional, pero si se proporciona, debe ser un array de números enteros.
   */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1)
  @IsInt({ each: true }) // Asegura que cada elemento del array sea un número entero.
  tags?: number[];
}
