import 'dotenv/config';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import {AppConfigs } from './config/app.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(AppConfigs.port);
}

bootstrap();
