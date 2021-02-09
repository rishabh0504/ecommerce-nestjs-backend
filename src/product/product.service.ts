import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ProductEntity } from './product.entity';

@Injectable()
export class ProductService {
  constructor(
    @InjectRepository(ProductEntity)
    private productRepository: Repository<ProductEntity>,
  ) { }

  async findAll(): Promise<ProductEntity[]> {
    try {

      return await this.productRepository.find({
        relations: ['brand', 'provider']
      });;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findOne(id: string): Promise<any> {
    try {
      return await this.productRepository.findOne(id, {
        relations: ['brand', 'provider'],
      });
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async create(product: any): Promise<ProductEntity> {
    try {
      const productCreated = await this.productRepository.save(product);
      return productCreated;
    } catch (err) {
      console.log(err);
      throw new InternalServerErrorException();
    }
  }

  async update(id: string, product: any) {
    try {
      const producUpdated = await this.productRepository.save({ id, ...product }, { reload: true });
      return producUpdated;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

}
