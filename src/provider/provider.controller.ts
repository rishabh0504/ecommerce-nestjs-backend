import { Body, Controller, Get, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { Provider } from './provider.dto';
import { ProviderService } from './provider.service';

@Controller('providers')
export class ProviderController {

  constructor(
    private providerService: ProviderService
  ) { }

  @Get()
  findAll() {
    return this.providerService.findAll();
  }

  @Post()
  @UsePipes(ValidationPipe)
  create(@Body() provider: Provider) {
    return this.providerService.create(provider);
  }
}
