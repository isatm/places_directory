import { IsString } from 'class-validator';

export class CreateAnswerDto {
  @IsString()
  questionId: string;

  @IsString()
  user: string;

  @IsString()
  text: string;
}
