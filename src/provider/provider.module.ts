import { Module } from '@nestjs/common';
import { ProviderService } from './provider.service';
import { ProviderController } from './provider.controller';
import { ProviderEntity } from './provider.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ProviderEntity])],
  providers: [ProviderService],
  controllers: [ProviderController]
})
export class ProviderModule { }
