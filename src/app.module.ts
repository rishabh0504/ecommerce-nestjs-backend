import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import 'dotenv/config';

import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { ProviderModule } from './provider/provider.module';
import { WalletModule } from './wallet/wallet.module';
import { AuthModule } from './auth/auth.module';
import { OfferModule } from './offer/offer.module';
import { UserModule } from './user/user.module';
import { CartModule } from './cart/cart.module';
import { BrandModule } from './brand/brand.module';
import { AddressModule } from './address/address.module';
import { CommentsModule } from './comments/comments.module';
import { TransactionModule } from './transaction/transaction.module';
import { DBaseConnectionService } from './dbconnection.service';

@Module({
  imports: [
    TypeOrmModule.forRootAsync({
      useClass: DBaseConnectionService
    }),
    ProductModule,
    OrderModule,
    ProviderModule,
    WalletModule,
    AuthModule,
    OfferModule,
    UserModule,
    CartModule,
    BrandModule,
    AddressModule,
    CommentsModule,
    TransactionModule
  ],
  providers: [],
  controllers: []
})
export class AppModule {
  constructor(private connection: Connection) { }
}
