import { Body, Controller, Post } from '@nestjs/common';
import { UserService } from './';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post('/login')
  login(@Body() body: any) {
    return this.userService.login(body.email, body.password);
  }

  @Post('/register')
  register(@Body() body: any) {
    return this.userService.register(body.name, body.email, body.password);
  }
}
