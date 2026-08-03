import { Test, TestingModule } from '@nestjs/testing';
import { LessonServiceController } from './lesson-service.controller';
import { LessonServiceService } from './lesson-service.service';

describe('LessonServiceController', () => {
  let lessonServiceController: LessonServiceController;

  beforeEach(async () => {
    const app: TestingModule = await Test.createTestingModule({
      controllers: [LessonServiceController],
      providers: [LessonServiceService],
    }).compile();

    lessonServiceController = app.get<LessonServiceController>(LessonServiceController);
  });

  describe('root', () => {
    it('should return "Hello World!"', () => {
      expect(lessonServiceController.getHello()).toBe('Hello World!');
    });
  });
});
