import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CalculateSumModule } from './calculate-sum/calculate-sum.module';

@Module({
  imports: [CalculateSumModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
