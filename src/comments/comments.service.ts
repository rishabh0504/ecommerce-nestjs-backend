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

  async findByUserId(user: string): Promise<CommentEntity[]> {
    try {
      return await this.commentRepository.find({
        where: {
          user
        },
        relations: ['user', 'product']
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  async findByProductId(product: string): Promise<CommentEntity[]> {
    try {
      return await this.commentRepository.find({
        where: {
          product
        },
        relations: ['user', 'product']
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async create(comment: any): Promise<CommentEntity> {
    try {
      const createdComment = await this.commentRepository.save(comment);
      return createdComment;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
