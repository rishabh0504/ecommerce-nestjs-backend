import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Brand } from './brand.dto';
import { BrandEntity } from './brand.entity';

@Injectable()
export class BrandService {

  constructor(
    @InjectRepository(BrandEntity) private brandRepository: Repository<BrandEntity>
  ) { }

  async create(brand: Brand): Promise<BrandEntity> {
    const createdBrand = await this.brandRepository.save(brand);
    return createdBrand;
  }

  async findAll(): Promise<BrandEntity[]> {
    return this.brandRepository.find();
  }
}
