import { BrandEntity } from "src/brand/brand.entity";
import { CartEntity } from "src/cart/cart.entity";
import { CommentEntity } from "src/comments/comment.entity";
import { ProviderEntity } from "src/provider/provider.entity";
import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, OneToMany, OneToOne } from "typeorm";


@Entity('products')
export class ProductEntity extends AbstractEntity {

  @Column()
  name: string;

  @Column({ type: 'simple-array' })
  description: string[];

  @Column({ type: 'simple-array' })
  images: string[];

  @Column()
  retailPrice: number;

  @Column()
  rating: number;

  @Column()
  availableCount: number;

  @ManyToOne(type => BrandEntity, brand => brand.id)
  @JoinTable()
  brand: BrandEntity;


  @ManyToOne(type => ProviderEntity, provider => provider.id)
  @JoinColumn()
  provider: ProviderEntity;

}