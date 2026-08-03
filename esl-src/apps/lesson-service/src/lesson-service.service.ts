import { Injectable } from '@nestjs/common';

@Injectable()
export class LessonServiceService {
  getHello(): string {
    return 'Hello World!';
  }
}
