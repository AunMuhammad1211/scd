import { Injectable } from '@nestjs/common';

@Injectable()
export class CalculateSumService {
  calculateSum(a: number, b: number): string {
    const result = a + b;
    return `The sum of ${a} and ${b} is ${result}`;
  }
}