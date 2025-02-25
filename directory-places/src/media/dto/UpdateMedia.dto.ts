import { IsOptional, IsString, IsInt } from 'class-validator';
/**
 *  DTO para la actualización de una imagen existente en la base de datos.
 */
export class UpdateMediaDto {
  /**
   *  Nueva URL de la imagen (opcional).
   */
  @IsOptional()
  @IsString()
  media_url?: string;
  /**
   *  Nueva descripción de la imagen (opcional).
   */
  @IsOptional()
  @IsInt()
  place_id?: number;
}
