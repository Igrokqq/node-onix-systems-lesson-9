import { NestFactory } from '@nestjs/core';
import { AppModule } from './components/app/app.module';
import { Middleware } from './config/middleware';
import { env } from './config/env';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  Middleware.init(app);

  await app.listen(process.env.PORT || 3000);
}
bootstrap();
