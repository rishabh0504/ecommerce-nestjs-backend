import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Address } from './address.dto';
import { AddressEntity } from './address.entity';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(AddressEntity) private addressRepository: Repository<AddressEntity>
  ) { }


  async create(address: Address): Promise<AddressEntity> {
    try {
      const createdAddress = await this.addressRepository.save(address);
      return createdAddress;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findByUserId(user: string): Promise<AddressEntity[]> {
    try {
      const createdAddress = await this.addressRepository.find({
        where: {
          user
        }
      });
      return createdAddress;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
