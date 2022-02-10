import { Logger } from 'winston';
import { Inject, Injectable } from '@nestjs/common';
const StatsD = require('hot-shots');
const dogstatsd = new StatsD();
@Injectable()
export class AppService {
  ping(): string {
    dogstatsd.increment('rest-service.ping_attempts');
    return 'Service is working';
  }
}
