import { Body, Controller, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Comment } from './comment.dto';
import { CommentsService } from './comments.service';

@Controller('comments')
export class CommentsController {

  constructor(
    private commentService: CommentsService
  ) { }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() comment: Comment) {
    return this.commentService.create(comment);
  }

}
