import { BadRequestException, Injectable, NotFoundException, UnauthorizedException } from '@nestjs/common';
import { UsersService } from 'src/users/users.service';
import * as bcryptjs from 'bcryptjs'
import { LoginDto } from './dto/login.dto';
import { JwtService } from '@nestjs/jwt';
import { ResetDto } from './dto/reset.dto';

@Injectable()
export class AuthService {

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService
  ){}

  async register({username, name, email, password}){

    const user = await this.usersService.findOneByUsername(username);
    if(user){
      throw new BadRequestException("Usuario ya registrado");
    }

    const correo = await this.usersService.findOneByEmail(email)
    if(correo){
      throw new BadRequestException("Email ya registrado")
    }

    return await this.usersService.create({
      username,
      name,
      email,
      password: await bcryptjs.hash(password, 10)
    });
  }

  async login({username, password}: LoginDto){
    const user = await this.usersService.findOneByUsername(username)
    if(!user){
      throw new UnauthorizedException("Username invalido")
    }

    const isPasswordValid = await bcryptjs.compare(password, user.password)
    if(!isPasswordValid){
      throw new UnauthorizedException("Password invalida")
    }

    const payload = { username: user.username };
    const token = await this.jwtService.signAsync(payload)
    return {token, username};
  }

  async reset({ email }: ResetDto){
    const correo = await this.usersService.findOneByEmail(email);

    if(!correo){
      throw new NotFoundException("Correo no encontrado") 
    }


  }
  
}
