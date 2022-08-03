import { IsNotEmpty, IsString } from "class-validator";

export class SignUpEducatorsSchoolValidator {
  @IsString({ message: "required only string chracters" })
  @IsNotEmpty({ message: "email must be a required" })
  schoolDistrict: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  schoolName: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  schoolSetting: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  schoolType: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  primaryRole: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  average: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  pla: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  grades: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  programming: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  race: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  identify: string;
}
