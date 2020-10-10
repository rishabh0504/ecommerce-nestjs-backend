import { ProductEntity } from "src/product/product.entity";
import { UserEntity } from "src/user/user.entity";
import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";


@Entity('carts')
export class CartEntity extends AbstractEntity {

  @OneToMany(type => UserEntity, user => user.id)
  @JoinColumn()
  user: UserEntity;

  @ManyToMany(type => ProductEntity)
  @JoinTable()
  products: ProductEntity[];

}