import { BadRequestException, Injectable } from '@nestjs/common';
import { UserInterface } from './user.interface';
import { UserEntity } from './user.entity';
import { CreateUserDto } from './create-user.dto';

@Injectable()
export class UsersService {
  /**
   * Создать нового пользователя
   * @param data
   */
  public async createUser(data: CreateUserDto): Promise<UserInterface> {
    const findUserWithEmail = await UserEntity.findOne({
      where: { email: data.email },
    });
    if (findUserWithEmail) {
      throw new BadRequestException(`Email ${data.email} занят.`);
    }
    let user = new UserEntity();
    user.email = data.email;
    user = await UserEntity.save(user);
    return user;
  }

  /**
   * Найти всех пользователей
   */
  public async findAllUsers(): Promise<UserInterface[]> {
    return await UserEntity.find();
  }
}
