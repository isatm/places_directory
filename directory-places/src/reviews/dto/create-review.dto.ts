import { IsString, IsNumber, Min, Max, IsOptional, IsArray } from 'class-validator';

export class CreateReviewDto {
  @IsString()
  placeId: string;

  @IsString()
  user: string;

  @IsNumber()
  @Min(1)
  @Max(5)
  rating: number;

  @IsOptional()
  @IsString()
  comment?: string;

  @IsOptional()
  @IsArray()
  @IsString({ each: true })
  multimedia?: string[]; // Arreglo de strings para imágenes en base64
}