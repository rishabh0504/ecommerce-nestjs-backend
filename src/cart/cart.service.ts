import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { In, Repository } from 'typeorm';
import { Cart, UpdatedCart } from './cart.dto';
import { CartEntity } from './cart.entity';
@Injectable()
export class CartService {
  constructor(
    @InjectRepository(CartEntity) private cartRepository: Repository<CartEntity>,
    @InjectRepository(ProductEntity) private productRepository: Repository<ProductEntity>

  ) { }

  async create(cart: any): Promise<any> {
    try {
      const productIds = cart.products;
      delete cart.products;
      let createdCart = await this.cartRepository.create(cart);
      createdCart = await this.cartRepository.save(createdCart);
      const productsList = await this.productRepository.find({
        where: { id: In(productIds) }
      });
      createdCart['products'] = [];
      for (const product of productsList) {
        createdCart['products'].push(product);
      }
      return await this.cartRepository.save(createdCart);;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async update(id: string, cart: any): Promise<CartEntity> {
    try {
      cart.id = id;
      const cartUpdated = await this.cartRepository.save(cart);
      return cartUpdated;
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findByCartId(id: string): Promise<CartEntity[]> {
    try {
      const findById = await this.cartRepository.find({
        where: {
          id
        }, relations: ['products']
      });
      return findById;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

}
