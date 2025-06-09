import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { NestExpressApplication } from '@nestjs/platform-express';

async function bootstrap() {
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  const PORT = process.env.PORT ?? 3001

  await app.listen(3000);
  
  console.log('RUNNING ON PORT : ', PORT)
  console.log('hello world!')
}


void bootstrap();