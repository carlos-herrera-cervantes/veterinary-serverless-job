import * as functions from 'firebase-functions';
import { NestFactory } from '@nestjs/core';
import { ExpressAdapter } from '@nestjs/platform-express';
import { AppModule } from './app.module';
import express from 'express';

const server = express();

const createNestServer = async (expressInstance) => {
  const app = await NestFactory.create(
    AppModule,
    new ExpressAdapter(expressInstance),
  );

  return app.init();
}

createNestServer(server)
  .then(() => console.info('Application successfully started'))
  .catch(e => console.error('An errored has ocurred when starting the application: ', e));

export const api = functions.https.onRequest(server);
