import { IsNotEmpty, IsNumber, IsString } from "class-validator";

export class CreateVerifyCodeDto {

  @IsNumber()
  @IsNotEmpty()
  code: number;

  @IsString()
  @IsNotEmpty()
  user_id: string;
}
