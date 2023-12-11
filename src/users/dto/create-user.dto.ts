import { IsString, IsOptional } from 'class-validator'
export class CreateUserDto {

  @IsString()
  username: string;

  @IsString()
  password: string;
   
  @IsOptional()
  name: string;
  
  @IsString()
  @IsOptional()
  email?: string;

}
