import { Module } from '@nestjs/common';
import { DbConfigModule } from './core/db-config.module';
import { RsUsersModule } from './resource/rs-users/rs-users.module';
import { AuthModule } from './spe/auth/auth.module';
import { UserModule } from './spe/user/user.module';
@Module({
  imports: [DbConfigModule, RsUsersModule, AuthModule, UserModule],
})
export class AppModule {}
