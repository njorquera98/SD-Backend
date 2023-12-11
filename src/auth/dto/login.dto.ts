import { Transform } from "class-transformer";
import { IsString, MinLength } from "class-validator";

export class LoginDto {
  @IsString()
  username: string;

  @Transform(({ value }) => value.trim())
  @IsString()
  @MinLength(6)
  password: string;
}
