import {
  IsNotEmpty, IsNumber, IsString, Max,
  MaxLength, Min, MinLength
} from "class-validator";

//pattern
// @Matches(/^\\S+@\\S+\\.\\S+$/)

export class CreateProduct {
  @IsString()
  @IsNotEmpty()
  @MinLength(2)
  @MaxLength(32)
  readonly title: string;

  @IsNumber()
  @IsNotEmpty()
  @Min(2)
  @Max(322)
  readonly price: number;
}
