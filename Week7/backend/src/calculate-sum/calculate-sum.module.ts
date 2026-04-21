import { Module } from '@nestjs/common';
import { CalculateSumController } from './calculate-sum.controller';
import { CalculateSumService } from './calculate-sum.service';

@Module({
  controllers: [CalculateSumController],
  providers: [CalculateSumService]
})
export class CalculateSumModule {}
