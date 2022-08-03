import { IsNotEmpty, IsString } from "class-validator";

export class SignUpInstructorValidator {
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
  number: string;

  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  address: string;

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
  resume: string;

  @IsString({ message: "fill the required file" })
  @IsNotEmpty({ message: "fill the required file" })
  bio: string;
}
