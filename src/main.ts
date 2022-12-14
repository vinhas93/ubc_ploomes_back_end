import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, { cors: {origin: ['http://localhost:3000', 'https://ultimatebingochampionship.vercel.app']} });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('Api-UBC-Bingo')
    .setDescription('Jogo de bingo online com temática do UFC!')
    .setVersion('1.0.0')
    .addTag('Status')
    .addTag('Auth')
    .addTag('User')
    .addTag('Room')
    .addTag('Card')
    .addTag('Ranking')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  app.enableCors();
  await app.listen(process.env.PORT || 3333);
}
bootstrap();
