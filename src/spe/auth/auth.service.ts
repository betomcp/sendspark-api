import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { User } from 'src/resource/rs-users/entities/user.entity';

@Injectable()
export class AuthService {
  constructor(private jwtService: JwtService) {}
  async login(user: User) {
    const payload = { firstName: user.firstName, sub: user._id };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}
