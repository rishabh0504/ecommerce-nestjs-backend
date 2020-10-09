import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity } from "typeorm";


@Entity('providers')
export class ProviderEntity extends AbstractEntity {

  @Column()
  name: string;

}