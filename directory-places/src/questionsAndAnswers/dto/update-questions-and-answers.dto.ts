import { IsOptional, IsString } from 'class-validator';

export class UpdateQuestionsAndAnswersDto {
  @IsOptional()
  @IsString()
  questionText?: string;

  @IsOptional()
  @IsString()
  answerText?: string; 
}