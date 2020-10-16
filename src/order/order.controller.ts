import { Controller, Get, Param, UsePipes, ValidationPipe } from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('orders')
export class OrderController {

  constructor(
    private orderService: OrderService
  ) { }


  @Get(':id')
  @UsePipes(ValidationPipe)
  findOrderById(@Param('id') id: string) {
    return this.orderService.findById(id);
  }

  @Get()
  @UsePipes(ValidationPipe)
  finAll() {
    return this.orderService.findAll();
  }

}
