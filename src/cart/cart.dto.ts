import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class Cart {

  @IsArray()
  @IsNotEmpty()
  products: string[];

  /*@IsString()
  @IsNotEmpty()
  user: string;*/
}

export class UpdatedCart {

  @IsArray()
  @IsNotEmpty()
  products: string[];

}