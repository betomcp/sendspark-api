import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { useContainer } from 'class-validator';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    const allowedOrigins = [
      'https://sendspark-api-2qp7.onrender.com',
      'https://betomcp.github.io/ui-sendspark-challenge',
      'https://betomcp.github.io/ui-sendspark-challenge/',
      'https://betomcp.github.io',
    ];

    if (allowedOrigins.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS'));
    }
  },
  credentials: true,
};

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // enable cors options
  app.enableCors(corsOptions);

  // configure the class validator library
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );

  // configure swagger docs
  const config = new DocumentBuilder()
    .setTitle('sendspark challenge API')
    .setDescription('docs')
    .setVersion('1.0')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  // add class validator do dependency injection system
  useContainer(app.select(AppModule), { fallbackOnErrors: true });
  await app.listen(process.env.PORT || 3000);
}
bootstrap();
