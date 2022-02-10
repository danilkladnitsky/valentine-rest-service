const { createLogger, format, transports } = require('winston');
var DatadogWinston = require('datadog-winston');
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

const cors = require('cors');

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('ITMO.VALENTINE REST SERVICE API')
    .setDescription('Backend API description')
    .setVersion('1.0')
    .build();

  const document = SwaggerModule.createDocument(app, config);

  SwaggerModule.setup('api', app, document);
  app.use(
    cors({
      origin: '*',
    }),
  );

  const logger = createLogger({
    level: 'info',
    exitOnError: false,
    format: format.json(),
    transports: [new transports.File({ filename: `./logs/rest-logs.log` })],
  });

  logger.add(
    new DatadogWinston({
      apiKey: 'f09b651783b04ee629378c500db805e3c9dd153d',
      hostname: 'Yandex.Oblako',
      service: 'rest_service',
      ddsource: 'nodejs',
      ddtags: 'foo:bar,boo:baz',
    }),
  );

  logger.info('Hey there', { thisIsMy: 'metadata' });

  await app.listen(process.env.PORT);
}
bootstrap();
