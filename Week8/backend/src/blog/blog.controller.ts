import { Controller, Post, Put, Body } from '@nestjs/common';
import { BlogService } from './blog.service';

@Controller('blog')
export class BlogController {
  constructor(private readonly blogService: BlogService) {}

  @Post()
  addSomething(@Body() data: Record<string, any>) {
    return this.blogService.createBlog(data);
  }

  @Put()
  updateSomething(@Body() data: Record<string, any>) {
    return this.blogService.updateBlog(data);
  }
}