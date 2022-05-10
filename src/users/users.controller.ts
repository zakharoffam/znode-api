import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';
import { UserInterface } from './user.interface';
import { CreateUserDto } from './create-user.dto';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  /**
   * Добавить пользователя
   * @url POST /api/users
   * @param body
   * @private
   */
  @Post()
  private async postUser(@Body() body: CreateUserDto): Promise<UserInterface> {
    return await this.usersService.createUser(body);
  }

  /**
   * Получить список всех пользователей
   * @url GET /api/users
   * @private
   */
  @Get()
  private async getUsers(): Promise<UserInterface[]> {
    return await this.usersService.findAllUsers();
  }
}
