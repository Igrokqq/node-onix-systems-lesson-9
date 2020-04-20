import * as helmet from 'helmet';
import * as compression from 'compression';
import {INestApplication, ValidationPipe} from '@nestjs/common';
import { AllExceptionsFilter } from '../exceptions/filters/all-exceptions.filter';

export class Middleware {
    static init(app: INestApplication) {
        app.setGlobalPrefix('api');
        app.useGlobalPipes(new ValidationPipe());
        app.useGlobalFilters(new AllExceptionsFilter());

        app.use(compression());
        // sets secure headers globally
        app.use(helmet());
        // enables cors requests to our api
        app.enableCors();
    }
}
