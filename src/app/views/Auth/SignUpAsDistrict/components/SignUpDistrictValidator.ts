import { IsNotEmpty, IsString } from "class-validator";

export class SignUpDistrictValidator {
  @IsString({ message: "required only string chracters" })
  @IsNotEmpty({ message: "email must be a required" })
  districtid: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  districtname: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  districtAddress: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  districtEmail: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  password: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  confirmation_password: string;
}
