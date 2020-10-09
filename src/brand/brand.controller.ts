import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Brand } from './brand.dto';
import { BrandService } from './brand.service';

@Controller('brands')
export class BrandController {

  constructor(
    private brandService: BrandService
  ) { }


  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() brand: Brand) {
    return this.brandService.create(brand);
  }

  @Get()
  findAll() {
    return this.brandService.findAll()
  }
}
