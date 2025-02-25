import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionsAndAnswers } from './questionsAndAnswers.schema';
import { CreateQuestionsAndAnswersDto } from './dto/create-questions-and-answers.dto';
import { UpdateQuestionsAndAnswersDto } from './dto/update-questions-and-answers.dto';

/**
 * Servicio para gestionar preguntas y respuestas en la aplicación.
 */
@Injectable()
export class QuestionsAndAnswersService {
  /**
   * Constructor del servicio de preguntas y respuestas.
   * @param questionsAndAnswersModel Modelo de Mongoose para la entidad QuestionsAndAnswers.
   */
  constructor(
    @InjectModel(QuestionsAndAnswers.name)
    private readonly questionsAndAnswersModel: Model<QuestionsAndAnswers>,
  ) {}

  /**
   * Crea una nueva pregunta o respuesta.
   * @param createQuestionsAndAnswersDto Datos para la creación de la pregunta o respuesta.
   * @returns La pregunta o respuesta creada y guardada en la base de datos.
   */
  async create(createQuestionsAndAnswersDto: CreateQuestionsAndAnswersDto) {
    const createdQuestionOrAnswer = new this.questionsAndAnswersModel(
      createQuestionsAndAnswersDto,
    );
    return createdQuestionOrAnswer.save();
  }

  /**
   * Obtiene todas las preguntas y respuestas asociadas a un lugar específico.
   * @param placeId Identificador del lugar.
   * @returns Lista de preguntas y respuestas del lugar.
   */
  async findAllByPlaceId(placeId: string) {
    return this.questionsAndAnswersModel.find({ placeId }).exec();
  }

  /**
   * Obtiene una pregunta o respuesta por su identificador.
   * @param id Identificador de la pregunta o respuesta.
   * @returns La pregunta o respuesta encontrada o null si no existe.
   */
  async findOne(id: string) {
    return this.questionsAndAnswersModel.findById(id).exec();
  }

  /**
   * Actualiza una pregunta o respuesta existente.
   * @param id Identificador de la pregunta o respuesta a actualizar.
   * @param updateQuestionsAndAnswersDto Datos a actualizar en la pregunta o respuesta.
   * @returns La pregunta o respuesta actualizada.
   */
  async update(
    id: string,
    updateQuestionsAndAnswersDto: UpdateQuestionsAndAnswersDto,
  ) {
    return this.questionsAndAnswersModel
      .findByIdAndUpdate(id, updateQuestionsAndAnswersDto, { new: true })
      .exec();
  }

  /**
   * Elimina una pregunta o respuesta por su identificador.
   * @param id Identificador de la pregunta o respuesta a eliminar.
   * @returns La pregunta o respuesta eliminada o null si no existe.
   */
  async remove(id: string) {
    return this.questionsAndAnswersModel.findByIdAndDelete(id).exec();
  }
}
