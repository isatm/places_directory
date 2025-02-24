import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Answer, AnswerDocument } from './answers.schema';
import { CreateAnswerDto } from './dto/create-answer.dto';

@Injectable()
export class AnswersService {
  constructor(@InjectModel(Answer.name) private answerModel: Model<AnswerDocument>) {}

  async create(createAnswerDto: CreateAnswerDto): Promise<Answer> {
    const newAnswer = new this.answerModel(createAnswerDto);
    return newAnswer.save();
  }

  async findByQuestion(questionId: string): Promise<Answer[]> {
    return this.answerModel.find({ questionId }).exec();
  }
}
