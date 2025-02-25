import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { QuestionsAndAnswersService } from './questionsAndAnswers.service';
import { QuestionsAndAnswersController } from './questionsAndAnswers.controller';
import {
  QuestionsAndAnswers,
  QuestionsAndAnswersSchema,
} from './questionsAndAnswers.schema';

/**
 * modulo de question and answers
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: QuestionsAndAnswers.name, schema: QuestionsAndAnswersSchema },
    ]),
  ],
  controllers: [QuestionsAndAnswersController],
  providers: [QuestionsAndAnswersService],
  exports: [QuestionsAndAnswersService],
})
export class QuestionsAndAnswersModule {}