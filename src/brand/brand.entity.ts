import { AbstractEntity } from "src/util/abstract.entity";
import { Column, Entity } from "typeorm";


@Entity('brands')
export class BrandEntity extends AbstractEntity {

  @Column()
  name: string;
  

}