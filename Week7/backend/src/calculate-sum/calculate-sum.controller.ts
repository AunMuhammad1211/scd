import { Controller, Get, Query } from '@nestjs/common';
import { CalculateSumService } from './calculate-sum.service';

@Controller()
export class CalculateSumController {
  constructor(private readonly calculateSumService: CalculateSumService) {}

  @Get('add')
  getAddition(@Query('a') a: string, @Query('b') b: string): string {
    return this.calculateSumService.calculateSum(Number(a), Number(b));
  }
}