import { Test, TestingModule } from '@nestjs/testing';
import { UserService } from './user.service';
import { RsUsersModule } from 'src/resource/rs-users/rs-users.module';
import { AuthModule } from '../auth/auth.module';
import { DbConfigModule } from 'src/core/db-config.module';

describe('UserService', () => {
  let service: UserService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [UserService],
      imports: [RsUsersModule, AuthModule, DbConfigModule],
    }).compile();

    service = module.get<UserService>(UserService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
