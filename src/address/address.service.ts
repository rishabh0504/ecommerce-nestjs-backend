import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { truncate } from 'fs';
import { UserEntity } from 'src/user/user.entity';
import { Repository } from 'typeorm';
import { Address, UpdateAddress } from './address.dto';
import { AddressEntity } from './address.entity';

@Injectable()
export class AddressService {

  constructor(
    @InjectRepository(AddressEntity) private addressRepository: Repository<AddressEntity>
  ) { }


  async create(address: any): Promise<AddressEntity> {
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

  async updateByAddressAndUserId(user: string, id: string, address: UpdateAddress) {
    try {
      const selectedAddress = await this.addressRepository.find({
        where: {
          id,
          user
        },
        relations: ['user']
      });
      if (selectedAddress) {
        const addressUpdated = await this.addressRepository.save({ id, ...address }, { reload: true });
        return addressUpdated;
      } else {
        throw new InternalServerErrorException('This address does notbelongs to you.');
      }
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async deleteByAddressAndUserId(user: string, id: string): Promise<Boolean> {
    try {
      const selectedAddress = await this.addressRepository.find({
        where: {
          id,
          user
        },
        relations: ['user']
      });
      if (selectedAddress && selectedAddress.length > 0) {
        const status = await this.addressRepository.delete(id);
        console.log(status);
        if (status) {
          return true;
        } else {
          throw new InternalServerErrorException('Something went wrong. Please try again.');
        }
      } else {
        throw new InternalServerErrorException('This address does notbelongs to you.');
      }
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
