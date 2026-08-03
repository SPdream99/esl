import { Controller, Get } from '@nestjs/common';
import { LessonServiceService } from './lesson-service.service';

@Controller()
export class LessonServiceController {
  constructor(private readonly lessonServiceService: LessonServiceService) {}

  @Get()
  getHello(): string {
    return this.lessonServiceService.getHello();
  }
}
