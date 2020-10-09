import { IsNotEmpty, IsString } from 'class-validator';
export class Provider {

  @IsString()
  @IsNotEmpty()
  name: string;

}