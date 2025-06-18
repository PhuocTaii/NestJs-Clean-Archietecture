import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { HeaderGuard } from './shared/security/header-guard.security';
import { swaggerConfig } from './shared/config/swagger.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('api/v1');

  app.useGlobalGuards(new HeaderGuard(app.get('ConfigService')));

  swaggerConfig(app);

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
