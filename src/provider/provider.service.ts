import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Provider } from './provider.dto';
import { ProviderEntity } from './provider.entity';

@Injectable()
export class ProviderService {
  constructor(
    @InjectRepository(ProviderEntity) private providerRepository: Repository<ProviderEntity>
  ) { }


  async create(provider: Provider): Promise<ProviderEntity> {
    try {
      const createdProvider = await this.providerRepository.save(provider);
      return createdProvider;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findAll(): Promise<ProviderEntity[]> {
    try {
      return await this.providerRepository.find();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
