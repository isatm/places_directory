import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import { AnswersService } from './answers.service';
import { CreateAnswerDto } from './dto/create-answer.dto';
import { Answer } from './answers.schema';

@Controller('answers')
export class AnswersController {
  constructor(private readonly answersService: AnswersService) {}

  @Post()
  create(@Body() createAnswerDto: CreateAnswerDto): Promise<Answer> {
    return this.answersService.create(createAnswerDto);
  }

  @Get(':questionId')
  findByQuestion(@Param('questionId') questionId: string): Promise<Answer[]> {
    return this.answersService.findByQuestion(questionId);
  }
}
