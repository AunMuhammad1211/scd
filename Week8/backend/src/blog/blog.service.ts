import { Injectable } from '@nestjs/common';

@Injectable()
export class BlogService {
  createBlog(data: Record<string, any>) {
    return {
      message: 'Blog created successfully',
      payload: data,
    };
  }

  updateBlog(data: Record<string, any>) {
    return {
      message: 'Blog updated successfully',
      updatedFields: data,
    };
  }
}

