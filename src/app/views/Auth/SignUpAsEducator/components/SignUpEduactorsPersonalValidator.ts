import { IsNotEmpty, IsString } from "class-validator";

export class SignUpEducatorsPersonalValidator {
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  fname: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  lname: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  email: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  semail: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  address1: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  address2: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  city: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  state: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  zip: string;
  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  number: string;
}
