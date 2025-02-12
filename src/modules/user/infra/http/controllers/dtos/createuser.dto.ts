import { IsString, IsEmail, ValidateNested, IsNotEmpty } from "class-validator";
import { Type } from "class-transformer";
import { Address } from "../../../../domain/entities/user";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  cpf: string;

  @IsString()
  @IsNotEmpty()
  cellPhone: string;

  @IsString()
  @IsNotEmpty()
  birthDate: string;

  @ValidateNested()
  @IsNotEmpty()
  address: Address;
}
