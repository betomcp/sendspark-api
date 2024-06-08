import { Module } from '@nestjs/common';
import { RsUsersService } from './rs-users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.entity';

@Module({
  providers: [RsUsersService],
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
  ],
  exports: [RsUsersService],
})
export class RsUsersModule {}
