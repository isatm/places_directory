import {
  Controller,
  Get,
  Post,
  Body,
  Param,
  Put,
  Delete,
} from '@nestjs/common';
import { QuestionsAndAnswersService } from './questionsAndAnswers.service';
import { CreateQuestionsAndAnswersDto } from './dto/create-questions-and-answers.dto';
import { UpdateQuestionsAndAnswersDto } from './dto/update-questions-and-answers.dto';

@Controller('questions-and-answers')
export class QuestionsAndAnswersController {
  constructor(
    private readonly questionsAndAnswersService: QuestionsAndAnswersService,
  ) {}

  @Post()
  create(@Body() createQuestionsAndAnswersDto: CreateQuestionsAndAnswersDto) {
    return this.questionsAndAnswersService.create(createQuestionsAndAnswersDto);
  }

  @Get('place/:placeId')
  findAllByPlaceId(@Param('placeId') placeId: string) {
    return this.questionsAndAnswersService.findAllByPlaceId(placeId);
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsAndAnswersService.findOne(id);
  }

  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionsAndAnswersDto: UpdateQuestionsAndAnswersDto,
  ) {
    return this.questionsAndAnswersService.update(id, updateQuestionsAndAnswersDto);
  }

  // Eliminar una pregunta o respuesta
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsAndAnswersService.remove(id);
  }
}