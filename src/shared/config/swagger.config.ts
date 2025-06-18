import { INestApplication } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

export function swaggerConfig(app: INestApplication): void {
  const config = new DocumentBuilder()
    .setTitle('NestJS Clean Architecture Example')
    .setDescription(
      'API documentation for the NestJS Clean Architecture example',
    )
    .setVersion('1.0')
    .build();

  const documentFactory = () => SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('docs', app, documentFactory);
}
