import { Body, Controller, Get, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Cart, UpdatedCart } from './cart.dto';
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
  create(@Body() cart: Cart) {
    return this.cartService.create(cart);
  }

  @Put(':id')
  @UsePipes(ValidationPipe)
  update(@Param('id') id: string, @Body() cart: UpdatedCart) {
    return this.cartService.update(id, cart);
  }

}
