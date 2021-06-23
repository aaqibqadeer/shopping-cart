import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Req,
  Session,
} from '@nestjs/common';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { UserService } from './user.service';
import { Document } from 'mongoose';
import { User } from './user.interface';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get()
  findAll() {
    return this.userService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string): Promise<(User & Document<any, any>) | null> {
    return this.userService.find(id);
  }

  @Post('/login')
  login(
    @Body() user: LoginDto,
    @Session() session: Record<string, any>,
  ): Promise<boolean> {
    return this.userService.login(user, session);
  }

  @Post('/register')
  register(@Body() user: RegisterDto): Promise<User & Document<any, any>> {
    return this.userService.register(user);
  }
}
