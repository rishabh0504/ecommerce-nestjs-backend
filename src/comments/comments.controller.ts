import { Body, Controller, Get, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Comment } from './comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {

  constructor(
    private commentService: CommentsService
  ) { }

  @Get(':id')
  findByProductId(@Param('id') productId: string) {
    return this.commentService.findByProductId(productId);
  }
  @Get('/user/:id')
  findAll(@Param('id') userId: string) {
    return this.commentService.findByUserId(userId);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() comment: Comment) {
    return this.commentService.create(comment);
  }

}
