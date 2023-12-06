import { IsString, IsOptional } from 'class-validator'
export class CreateUserDto {

  @IsString()
  username: string;

  @IsString()
  name: string;
  
  @IsString()
  @IsOptional()
  email?: string;

}
