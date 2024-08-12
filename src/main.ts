import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import * as process from 'process';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  // await app.listen(Number(process.env.PORT)); // FOR LOCAL
  await app.listen(process.env.PORT, '0.0.0.0');
}
bootstrap();
