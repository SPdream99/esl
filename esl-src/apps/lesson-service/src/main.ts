import { NestFactory } from '@nestjs/core';
import { LessonServiceModule } from './lesson-service.module';

async function bootstrap() {
  const app = await NestFactory.createMicroservice(LessonServiceModule);
  await app.listen(process.env.port ?? 3001);
}
bootstrap();
