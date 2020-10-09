import { IsArray, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString } from 'class-validator';

export class Product {

  @IsString()
  @IsNotEmpty()
  name: string;

  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsNumber()
  @IsNotEmpty()
  retailPrice: number;

  @IsInt()
  @IsNotEmpty()
  availableCount: number;

  @IsString()
  @IsNotEmpty()
  brand: string;

  @IsString()
  @IsNotEmpty()
  provider: string;

}

export class UpdateProduct {

  @IsOptional()
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsOptional()
  @IsArray()
  @IsNotEmpty()
  description: string[];

  @IsOptional()
  @IsNumber()
  @IsNotEmpty()
  retailPrice: number;

  @IsOptional()
  @IsInt()
  @IsNotEmpty()
  availableCount: number;
}