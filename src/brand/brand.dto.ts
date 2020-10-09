import { IsArray, IsNotEmpty, IsString } from 'class-validator';
export class Brand {

  @IsString()
  @IsNotEmpty()
  name: string;

}