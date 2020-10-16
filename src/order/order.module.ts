import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CartEntity } from 'src/cart/cart.entity';
import { ProductEntity } from 'src/product/product.entity';
import { OrderController } from './order.controller';
import { OrderEntity } from './order.entity';
import { OrderService } from './order.service';

@Module({
  imports: [TypeOrmModule.forFeature([OrderEntity, ProductEntity, CartEntity])],
  controllers: [OrderController],
  providers: [OrderService]
})
export class OrderModule { }
