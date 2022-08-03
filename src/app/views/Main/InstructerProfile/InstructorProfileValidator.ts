import { IsNotEmpty, IsString } from "class-validator";

export class InstructorProfileValidator {
  @IsString({ message: "required only string chracters" })
  @IsNotEmpty({ message: "email must be a required" })
  fname: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  lname: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  email: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  number: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  address: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  city: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  zip: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  resume: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  summry: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  newPassword: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  Confirmation_password: string;
}
