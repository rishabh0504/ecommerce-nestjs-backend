import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductEntity } from 'src/product/product.entity';
import { Repository } from 'typeorm';
import { OrderDTO } from './order.dto';
import { OrderEntity } from './order.entity';

@Injectable()
export class OrderService {

  constructor(
    @InjectRepository(OrderEntity) private orderRepository: Repository<OrderEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>,
    @InjectRepository(CartEntity) private cartRepository: Repository<CartEntity>
  ) { }

  async createOrderByCartId(order: OrderDTO) {
    const cartDetails = await this.cartRepository.findOne(order.cartId, {
      where: {
        user: order.userId
      }, relations: ['product']
    })
  }

  async findById(id: string): Promise<OrderEntity> {
    try {
      return await this.orderRepository.findOne(id, {
        relations: [
          'user',
          'product',
          'address'
        ]
      });
    } catch (err) {
      throw new InternalServerErrorException('Something went wrong.');
    }
  }

  async findAll(): Promise<OrderEntity[]> {
    try {
      return await this.orderRepository.find({
        relations: [
          'user',
          'product',
          'address'
        ]
      });
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }
}
