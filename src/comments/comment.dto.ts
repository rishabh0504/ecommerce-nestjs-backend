import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
export class Comment {

  @IsString()
  @IsNotEmpty()
  comment: string;

  @IsNumber()
  @IsNotEmpty()
  rating: number;

  @IsString()
  @IsNotEmpty()
  product: string;

  @IsString()
  @IsNotEmpty()
  user: string;

}