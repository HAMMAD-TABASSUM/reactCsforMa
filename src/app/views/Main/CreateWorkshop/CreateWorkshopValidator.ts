import { IsNotEmpty, IsString } from "class-validator";

export class CreateWorkshopValidator {
  @IsString({ message: "required only string chracters" })
  @IsNotEmpty({ message: "email must be a required" })
  workshopTitle: string;

  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  inviteInstructor: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  workshopType: string;
  @IsString({ message: "Only Allow String Chracter" })
  @IsNotEmpty({ message: "password must be required" })
  workshopdiscription: string;
}
