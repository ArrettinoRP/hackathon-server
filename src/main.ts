import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { initDatabase } from './database';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { logger: ['debug'] });
  initDatabase();
  await app.listen(5000);
}
bootstrap();
