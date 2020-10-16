import { IsArray, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AddCartDTO {

  @IsArray()
  @IsNotEmpty()
  products: string[];

  @IsString()
  @IsNotEmpty()
  user: string;
}


export class AddProductToCartDTO {
  @IsString()
  @IsNotEmpty()
  productId: string;
}

export class DeleteProductToCartDTO {
  @IsString()
  @IsNotEmpty()
  productId: string;
}