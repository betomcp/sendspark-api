import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/resource/rs-users/entities/user.entity';
import { LogInDto } from './dto/log-in.dto';
import { RsUsersService } from 'src/resource/rs-users/rs-users.service';
import { compareWithHash } from 'src/shared/crypto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private rsUserService: RsUsersService,
  ) {}

  async validateUser(logInDto: LogInDto) {
    try {
      const user = await this.rsUserService.findByEmail(logInDto.username);
      if (user) {
        const passwordIsCorrect = await compareWithHash(
          logInDto.password,
          user.password,
        );
        if (passwordIsCorrect) {
          const { password, ...result } = user;
          return result;
        }
      }
      return null;
    } catch (error) {
      throw new InternalServerErrorException();
    }
  }

  async login(user: User) {
    const payload = { firstName: user.firstName, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
