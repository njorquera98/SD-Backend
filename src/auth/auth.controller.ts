import { Body, Controller, Get, Post, UseGuards, Request, Patch } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './guard/auth.guard';
import { ResetDto } from './dto/reset.dto';

@Controller('auth')
export class AuthController {
  
  constructor(
  private readonly authService: AuthService
  ) { }

  @Post('register')
  register(
    @Body()
    registerDto: RegisterDto
  ){
    return this.authService.register(registerDto);
  }

  @Post('login')
  login(  
    @Body()
    loginDto: LoginDto
  ){
    return this.authService.login(loginDto);
  }

  @Get('profile')
  @UseGuards(AuthGuard)
  profile(
    @Request()
    req,
  ) {
    return req.user;
  }

  @Patch('reset')
  reset(
    @Body()
    resetdto: ResetDto
  ){
    return this.authService.reset(resetdto);
  }
}
