import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { CorsOptions } from '@nestjs/common/interfaces/external/cors-options.interface';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const corsOptions: CorsOptions = {
    origin: [
      'https://www.task-tracker-client-tau.vercel.app',
      'http://www.task-tracker-client-tau.vercel.app',
      'https://task-tracker-client-tau.vercel.app',
      'http://task-tracker-client-tau.vercel.app',
      'https://localhost:8080',
      'http://localhost:8080',
      'https://50.17.81.170:3000',
      'http://50.17.81.170:3000'
    ],
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  };

  app.enableCors(corsOptions);

  await app.listen(3000);
}
bootstrap();
