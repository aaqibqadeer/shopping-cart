import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.userService.find(id);
  }

  @Post('/login')
  login(@Body() body: any) {
    return this.userService.login(body.email, body.password);
  }

  @Post('/register')
  register(@Body() body: any) {
    return this.userService.register(body.name, body.email, body.password);
  }
}
