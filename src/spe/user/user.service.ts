import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { CreateUserDto } from 'src/resource/rs-users/dto/create-user.dto';
import { RsUsersService } from 'src/resource/rs-users/rs-users.service';
import { hashValue } from 'src/shared/crypto';
import { AuthService } from '../auth/auth.service';

@Injectable()
export class UserService {
  constructor(
    private rsUserService: RsUsersService,
    private authService: AuthService,
  ) {}

  async create(createUserDto: CreateUserDto) {
    try {
      // hash the password
      createUserDto.password = await hashValue(createUserDto.password);

      // create user
      const newUser = await this.rsUserService.create(createUserDto);

      // log in and return the user
      return await this.authService.login(newUser);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async delete(id: string) {
    try {
      return this.rsUserService.remove(id);
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }
}
