import { Body, Controller, Delete, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { AddCartDTO, AddProductToCartDTO, DeleteProductToCartDTO } from './cart.dto';
import { CartService } from './cart.service';

@Controller('carts')
export class CartController {

  constructor(
    private cartService: CartService
  ) { }

  @Get(':id')
  findCart(@Param('id') id: string) {
    return this.cartService.findByCartId(id);
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() cart: AddCartDTO) {
    return this.cartService.create(cart);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() product: AddProductToCartDTO) {
    return this.cartService.addProductToCart(id, product);
  }

  @Delete(':id')
  @UsePipes(ValidationPipe)
  deleteProductFromCart(@Param('id') id: string, @Body() product: DeleteProductToCartDTO) {
    return this.cartService.deleteProductFromCart(id, product);
  }

}
