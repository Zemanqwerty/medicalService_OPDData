import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  console.log(process.env.DB_HOST);
  app.useGlobalPipes(new ValidationPipe());
  app.enableCors({
    origin: [
      'http://localhost:8080',
      'http://localhost:80',
      'http://82.146.39.13:8080',
      'http://82.146.39.13:80',
    ],
    methods: ["GET", "POST"],
    credentials: true,
  });
  await app.listen(3000);
}
bootstrap();
