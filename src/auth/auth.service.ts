import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.dto';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AuthService {

  constructor(
    @InjectRepository(UserEntity) private authRepository: Repository<UserEntity>,
  ) { }


  async create(user: User): Promise<UserEntity> {
    try {
      const addedUser = JSON.parse(JSON.stringify(user));
      addedUser.dob = new Date(addedUser.dob);
      const createdUser = await this.authRepository.save(addedUser);
      return createdUser;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
