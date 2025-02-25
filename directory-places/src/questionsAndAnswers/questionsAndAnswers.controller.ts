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

/**
 * Controlador para gestionar preguntas y respuestas en la aplicación.
 */
@Controller('questions-and-answers')
export class QuestionsAndAnswersController {
  /**
   * Constructor del controlador de preguntas y respuestas.
   * @param questionsAndAnswersService Servicio de preguntas y respuestas.
   */
  constructor(
    private readonly questionsAndAnswersService: QuestionsAndAnswersService,
  ) {}

  /**
   * Crea una nueva pregunta o respuesta.
   * @param createQuestionsAndAnswersDto Datos para la creación de la pregunta o respuesta.
   * @returns La pregunta o respuesta creada.
   */
  @Post()
  create(@Body() createQuestionsAndAnswersDto: CreateQuestionsAndAnswersDto) {
    return this.questionsAndAnswersService.create(createQuestionsAndAnswersDto);
  }

  /**
   * Obtiene todas las preguntas y respuestas asociadas a un lugar específico.
   * @param placeId Identificador del lugar.
   * @returns Lista de preguntas y respuestas del lugar.
   */
  @Get('place/:placeId')
  findAllByPlaceId(@Param('placeId') placeId: string) {
    return this.questionsAndAnswersService.findAllByPlaceId(placeId);
  }

  /**
   * Obtiene una pregunta o respuesta por su identificador.
   * @param id Identificador de la pregunta o respuesta.
   * @returns La pregunta o respuesta encontrada o null si no existe.
   */
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.questionsAndAnswersService.findOne(id);
  }

  /**
   * Actualiza una pregunta o respuesta existente.
   * @param id Identificador de la pregunta o respuesta a actualizar.
   * @param updateQuestionsAndAnswersDto Datos a actualizar en la pregunta o respuesta.
   * @returns La pregunta o respuesta actualizada.
   */
  @Put(':id')
  update(
    @Param('id') id: string,
    @Body() updateQuestionsAndAnswersDto: UpdateQuestionsAndAnswersDto,
  ) {
    return this.questionsAndAnswersService.update(
      id,
      updateQuestionsAndAnswersDto,
    );
  }

  /**
   * Elimina una pregunta o respuesta por su identificador.
   * @param id Identificador de la pregunta o respuesta a eliminar.
   * @returns La pregunta o respuesta eliminada o null si no existe.
   */
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.questionsAndAnswersService.remove(id);
  }
}
