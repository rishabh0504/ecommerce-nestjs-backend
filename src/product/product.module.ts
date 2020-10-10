import { Module } from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductController } from './product.controller';
import { ProductEntity } from './product.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/cart.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ProductEntity, CartEntity])],
  providers: [ProductService],
  controllers: [ProductController]
})
export class ProductModule { }
