import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  Session,
  UseGuards,
} from '@nestjs/common';
import { UserService } from './user.service';
import { UserInterface } from './user.interface';
import { AuthGuard } from '../common/guard/auth.guard';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @UseGuards(AuthGuard)
  @Get()
  findAll(): Promise<UserInterface[]> {
    return this.userService.findAll();
  }

  @UseGuards(AuthGuard)
  @Get(':id')
  find(@Param('id') id: string): Promise<UserInterface> {
    return this.userService.find(id);
  }

  @Post('/login')
  login(
    @Body() user: UserInterface,
    @Session() session: Record<string, unknown>,
  ): Promise<boolean> {
    return this.userService.login(user, session);
  }

  @Post('/register')
  register(@Body() user: UserInterface): Promise<UserInterface> {
    return this.userService.register(user);
  }
}
