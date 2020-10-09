import { ProductEntity } from "src/product/product.entity";
import { UserEntity } from "src/user/user.entity";
import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity, JoinColumn, ManyToOne, OneToOne } from "typeorm";


@Entity('comments')
export class CommentEntity extends AbstractEntity {

  @Column()
  comment: string;

  @Column()
  rating: number;

  @OneToOne(type => ProductEntity)
  @JoinColumn()
  product: string;

  @ManyToOne(type => UserEntity, user => user.id)
  @JoinColumn()
  user: string;

}