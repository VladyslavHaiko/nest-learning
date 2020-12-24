import { IsNotEmpty, IsNumber, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class CreateUserDto {
  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(35)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  // @Matches(/^\\S+@\\S+\\.\\S+$/)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  password: string;

  @IsNumber()
  @Min(1)
  @Max(130)
  readonly age: number;
}
