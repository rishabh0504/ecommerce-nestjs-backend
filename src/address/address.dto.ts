import { IsNotEmpty, IsOptional, IsString } from 'class-validator';
export class Address {

  @IsString()
  @IsNotEmpty()
  line1_address: string;

  @IsOptional()
  @IsString()
  line2_address: string;

  @IsString()
  @IsNotEmpty()
  city: string;


  @IsOptional()
  @IsString()
  landmark: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  zipcode: string;

  @IsString()
  @IsNotEmpty()
  user: string;
}


export class UpdateAddress {

  @IsString()
  @IsNotEmpty()
  line1_address: string;

  @IsOptional()
  @IsString()
  line2_address: string;

  @IsString()
  @IsNotEmpty()
  city: string;


  @IsOptional()
  @IsString()
  landmark: string;

  @IsString()
  @IsNotEmpty()
  state: string;

  @IsString()
  @IsNotEmpty()
  country: string;

  @IsString()
  @IsNotEmpty()
  zipcode: string;
}