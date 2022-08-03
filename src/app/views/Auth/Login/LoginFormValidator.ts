import { IsNotEmpty, IsString } from "class-validator";

export class LoginFormValidator {
  @IsString({ message: "required only string chracters" })
  @IsNotEmpty({ message: "email must be a required" })
  email: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  password: string;
}
