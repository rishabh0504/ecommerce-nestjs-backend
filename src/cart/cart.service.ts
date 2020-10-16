import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { ProductEntity } from 'src/product/product.entity';
import { In, Repository } from 'typeorm';
import { AddProductToCartDTO, DeleteProductToCartDTO } from './cart.dto';
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

  async addProductToCart(id: string, product: AddProductToCartDTO): Promise<CartEntity> {
    try {
      const productId = product.productId;
      const existingCart = await this.cartRepository.findOne(id, { relations: ['products'] });
      const foundProduct = await this.productRepository.findOne(productId);
      if (foundProduct) {
        existingCart.products.push(foundProduct);
        return await this.cartRepository.save(existingCart);
      } else {
        throw new InternalServerErrorException('Invalid product id.');
      }
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async findByCartId(id: string): Promise<CartEntity> {
    try {
      const findById = await this.cartRepository.findOne(id, {
        relations: ['products']
      });
      return findById;
    } catch (err) {
      throw new InternalServerErrorException(err);
    }
  }

  async deleteProductFromCart(id: string, product: DeleteProductToCartDTO): Promise<CartEntity> {
    try {
      const productId = product.productId;
      let existingCart = await this.cartRepository.findOne(id, { relations: ['products'] });
      existingCart.products = existingCart.products.filter((product) => product.id !== productId);
      return await this.cartRepository.save(existingCart);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
