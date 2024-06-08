import { Module } from '@nestjs/common';
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { RsUsersModule } from 'src/resource/rs-users/rs-users.module';
import { AuthModule } from '../auth/auth.module';

@Module({
  controllers: [UserController],
  imports: [RsUsersModule, AuthModule],
  providers: [UserService],
})
export class UserModule {}
