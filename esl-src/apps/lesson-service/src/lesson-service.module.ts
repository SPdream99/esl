import { Module } from '@nestjs/common';
import { LessonServiceController } from './lesson-service.controller';
import { LessonServiceService } from './lesson-service.service';

@Module({
  imports: [],
  controllers: [LessonServiceController],
  providers: [LessonServiceService],
})
export class LessonServiceModule {}
