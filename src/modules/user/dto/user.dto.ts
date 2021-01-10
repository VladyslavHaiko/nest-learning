import { IsNotEmpty, IsNumber, IsString, Matches, Max, MaxLength, Min, MinLength } from "class-validator";

export class UserDto {

  _id?: string;

  @IsString()
  @IsNotEmpty()
  @MinLength(3)
  @MaxLength(35)
  readonly name: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3})|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)
  readonly email: string;

  @IsString()
  @IsNotEmpty()
  @Matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/)
  password: string;

  @IsNumber()
  @Min(1)
  @Max(130)
  readonly age: number;

  activated?: boolean;
}
