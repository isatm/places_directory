import { IsString } from 'class-validator';

export class CreateQuestionDto {
  @IsString()
  placeId: string;

  @IsString()
  user: string;

  @IsString()
  text: string;
}