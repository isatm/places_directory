import {
  IsString,
  IsOptional,
  IsInt,
  IsArray,
  ArrayMinSize,
} from 'class-validator';

/**
 * DTO para la creación de un lugar.
 * Define las propiedades requeridas y sus validaciones para garantizar la integridad de los datos recibidos.
 */
export class CreatePlaceDto {
  /**
   * Nombre del lugar.
   */
  @IsString()
  place_name: string;
  /**
   * Direccion del lugar.
   */
  @IsString()
  place_address: string;
  /**
   * Tipo de lugar.
   */
  @IsString()
  place_type: string;
  /**
   * Horario del lugar.
   */
  @IsString()
  place_hours: string;
  /**
   * Descripcion del lugar.
   */
  @IsOptional()
  @IsString()
  place_description?: string;
  /**
   * Categoria del lugar.
   */
  @IsInt()
  categoryId: number;

  /**
   * Lista de identificadores de etiquetas (`tags`) asociadas al lugar.
   * Es opcional, pero si se proporciona, debe ser un array de números válidos.
   */
  @IsOptional()
  @IsArray()
  @ArrayMinSize(1) // Opcional: exige al menos un tag si se proporciona
  @IsInt({ each: true }) // Valida que cada elemento del array sea un número entero
  tags?: number[];
}
