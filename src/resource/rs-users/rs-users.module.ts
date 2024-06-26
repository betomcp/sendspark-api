import { Module } from '@nestjs/common';
import { RsUsersService } from './rs-users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.entity';
import { IsUnicEmailValidator } from './validations/is-unic-email.validator';
import { IsValidEmailValidator } from './validations/is-valid-email.validator';

@Module({
  providers: [RsUsersService, IsUnicEmailValidator, IsValidEmailValidator],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  exports: [RsUsersService, IsValidEmailValidator],
})
export class RsUsersModule {}
