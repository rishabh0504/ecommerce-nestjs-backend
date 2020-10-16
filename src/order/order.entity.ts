import { AddressEntity } from "src/address/address.entity";
import { Product } from "src/product/product.dto";
import { ProductEntity } from "src/product/product.entity";
import { UserEntity } from "src/user/user.entity";
import { AbstractEntity } from "src/util/abstract.entity";
import { Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne } from "typeorm";

@Entity('orders')
export class OrderEntity extends AbstractEntity {

  @ManyToOne(type => AddressEntity, address => address.id)
  @JoinColumn()
  address: AddressEntity;

  @ManyToOne(type => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity;


  @ManyToMany(type => ProductEntity)
  @JoinTable()
  product: ProductEntity[];

}