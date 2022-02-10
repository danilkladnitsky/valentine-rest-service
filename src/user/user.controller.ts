import { BadRequestException, Controller, Get, Query } from '@nestjs/common';

import { UserService } from './user.service';

@Controller('/user')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Get('/auth')
  async authUser(@Query('code') code: string) {
    if (!code) {
      throw new BadRequestException();
    }

    return this.userService.authUser(code);
  }
  @Get()
  async getUsers() {
    return this.userService.getUsers();
  }
}
