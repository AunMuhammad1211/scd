import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BlogModule } from './blog/blog.module'; // 1. Add this import

@Module({
  imports: [BlogModule], // 2. Add this to the imports array
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}