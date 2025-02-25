import { IsNotEmpty, IsOptional, IsString } from 'class-validator';

export class CreateQuestionsAndAnswersDto {
  @IsNotEmpty()
  @IsString()
  placeId: string; // ID del lugar al que pertenece la pregunta o respuesta

  @IsNotEmpty()
  @IsString()
  user: string; // Usuario que hace la pregunta o respuesta

  @IsOptional()
  @IsString()
  questionText?: string; // Texto de la pregunta (opcional si es una respuesta)

  @IsOptional()
  @IsString()
  answerText?: string; // Texto de la respuesta (opcional si es una pregunta)

  @IsOptional()
  @IsString()
  parentId?: string; // ID de la pregunta a la que responde (si es una respuesta)
}