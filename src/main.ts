import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const PORT = process.env.PORT ?? 3001

  await app.listen(3000);
  
  console.log('RUNNING ON PORT : ${PORT} ')
}


void bootstrap();
