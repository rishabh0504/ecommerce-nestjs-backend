import { IsNotEmpty, IsString } from "class-validator";


export class OrderDTO {

  @IsString()
  @IsNotEmpty()
  cartId: string;

  @IsString()
  @IsNotEmpty()
  userId: string;


  @IsString()
  @IsNotEmpty()
  addressId: string;

}