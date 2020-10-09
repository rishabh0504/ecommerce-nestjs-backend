import { Body, Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { User } from 'src/user/user.dto';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {

  constructor(
    private authService: AuthService
  ) { }

  @Post('register')
  @UsePipes(ValidationPipe)
  create(@Body() user: User) {
    return this.authService.create(user);
  }


}
