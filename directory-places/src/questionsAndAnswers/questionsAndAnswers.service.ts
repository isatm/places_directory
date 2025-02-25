import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { QuestionsAndAnswers } from './questionsAndAnswers.schema';
import { CreateQuestionsAndAnswersDto } from './dto/create-questions-and-answers.dto';
import { UpdateQuestionsAndAnswersDto } from './dto/update-questions-and-answers.dto';

@Injectable()
export class QuestionsAndAnswersService {
  constructor(
    @InjectModel(QuestionsAndAnswers.name)
    private readonly questionsAndAnswersModel: Model<QuestionsAndAnswers>,
  ) {}

  // Crear una pregunta o respuesta
  async create(createQuestionsAndAnswersDto: CreateQuestionsAndAnswersDto) {
    const createdQuestionOrAnswer = new this.questionsAndAnswersModel(
      createQuestionsAndAnswersDto,
    );
    return createdQuestionOrAnswer.save();
  }

  async findAllByPlaceId(placeId: string) {
    return this.questionsAndAnswersModel.find({ placeId }).exec();
  }

  async findOne(id: string) {
    return this.questionsAndAnswersModel.findById(id).exec();
  }

  async update(
    id: string,
    updateQuestionsAndAnswersDto: UpdateQuestionsAndAnswersDto,
  ) {
    return this.questionsAndAnswersModel
      .findByIdAndUpdate(id, updateQuestionsAndAnswersDto, { new: true })
      .exec();
  }

  async remove(id: string) {
    return this.questionsAndAnswersModel.findByIdAndDelete(id).exec();
  }
}