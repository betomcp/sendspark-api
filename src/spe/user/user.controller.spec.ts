import { Test, TestingModule } from '@nestjs/testing';
import { UserController } from './user.controller';
import { UserService } from './user.service';
import { RsUsersModule } from 'src/resource/rs-users/rs-users.module';
import { AuthModule } from '../auth/auth.module';
import { DbConfigModule } from 'src/core/db-config.module';

describe('UserController', () => {
  let controller: UserController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [UserController],
      imports: [RsUsersModule, AuthModule, DbConfigModule],
      providers: [UserService],
    }).compile();

    controller = module.get<UserController>(UserController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
