import { NestFactory } from '@nestjs/core';
import { BandModule } from './band.module';
import { ValidationPipe } from '@nestjs/common'
import * as cookieParser from 'cookie-parser';
import helmet from 'helmet';
import * as csurf from 'csurf'

async function bootstrap() {
  const app = await NestFactory.create(BandModule);
  app.useGlobalPipes(new ValidationPipe({whitelist: true}))
  app.use(cookieParser())
  app.use(helmet())
  app.use(csurf())
  
  await app.listen(3000);
}
bootstrap();
