import { Body, Controller, Delete, Get, InternalServerErrorException, Param, Post, Put, UsePipes, ValidationPipe } from '@nestjs/common';
import { Address, UpdateAddress } from './address.dto';
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

  @Put(':userId/:addressId')
  @UsePipes(ValidationPipe)
  update(@Param('userId') userId: string, @Param('addressId') addressId: string, @Body() address: UpdateAddress) {
    return this.addressService.updateByAddressAndUserId(userId, addressId, address);
  }

  @Delete(':userId/:addressId')
  @UsePipes(ValidationPipe)
  delete(@Param('userId') userId: string, @Param('addressId') addressId: string) {
    return this.addressService.deleteByAddressAndUserId(userId, addressId);
  }
}
