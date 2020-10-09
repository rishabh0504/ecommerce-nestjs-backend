import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentEntity } from './comment.entity';
import { Comment } from './comment.dto';


@Injectable()
export class CommentsService {

  constructor(
    @InjectRepository(CommentEntity) private commentRepository: Repository<CommentEntity>
  ) { }


  /*async create(comments: Comment): Promise<CommentEntity> {
    try {
      const createdProvider = await this.commentRepository.save(comments);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }*/

  async findAll(): Promise<CommentEntity[]> {
    try {
      return await this.commentRepository.find({
        relations: ['user', 'product']
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async create(comment: Comment): Promise<CommentEntity> {
    try {
      const createdComment = await this.commentRepository.save(comment);
      return createdComment;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
