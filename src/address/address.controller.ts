import { Body, Controller, Get, InternalServerErrorException, Param, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Address } from './address.dto';
import { AddressEntity } from './address.entity';
import { AddressService } from './address.service';

@Controller('addresses')
export class AddressController {

  constructor(
    private addressService: AddressService
  ) { }

  @Get(':id')
  findByUserId(@Param('id') user: string) {
    return this.addressService.findByUserId(user)
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() address: Address) {
    return this.addressService.create(address);
  }

}
