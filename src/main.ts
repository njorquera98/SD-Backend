import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  // Configuración de tubos globales (global pipes)
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      forbidNonWhitelisted: true,
      transform: true,
    })
  );

  // Configuración de CORS
  app.enableCors({
    origin: 'http://localhost:9000', // Reemplaza con la URL de tu aplicación Quasar
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true,
  });

  // Iniciar la aplicación
  await app.listen(3000);
}
bootstrap();
