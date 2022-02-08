import { PrometheusService } from './prometheus.service';
import { PrometheusController } from './prometheus.controller';
/*
https://docs.nestjs.com/modules
*/

import { Module } from '@nestjs/common';

@Module({
  imports: [],
  controllers: [PrometheusController],
  providers: [PrometheusService],
})
export class PrometheusModule {}
