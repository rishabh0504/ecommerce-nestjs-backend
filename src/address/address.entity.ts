import { UserEntity } from "src/user/user.entity";
import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity, JoinTable, ManyToMany, ManyToOne } from "typeorm";


@Entity('addresses')
export class AddressEntity extends AbstractEntity {

  @Column()
  line1_address: string;

  @Column()
  line2_address: string;

  @Column()
  city: string;

  @Column()
  landmark: string;

  @Column()
  state: string;

  @Column()
  country: string;

  @Column()
  zipcode: string;

  @ManyToOne(type => UserEntity, user => user.id)
  @JoinTable()
  user: UserEntity;

}