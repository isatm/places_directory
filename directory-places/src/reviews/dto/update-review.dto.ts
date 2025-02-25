import { IsOptional, IsString, IsInt, Min, Max, IsArray } from 'class-validator';

export class UpdateReviewDto {
  @IsOptional()
  @IsInt()
  @Min(1)
  @Max(5)
  rating?: number; // Calificación de 1 a 5 estrellas (opcional)

  @IsOptional()
  @IsString()
  comment?: string; // Comentario del usuario (opcional)

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  multimedia?: string[]; // URLs de imágenes o videos (opcional)
}