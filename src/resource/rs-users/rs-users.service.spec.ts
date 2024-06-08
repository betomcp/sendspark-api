import { Test, TestingModule } from '@nestjs/testing';
import { RsUsersService } from './rs-users.service';
import { MongooseModule } from '@nestjs/mongoose';
import { User, userSchema } from './entities/user.entity';
import { DbConfigModule } from 'src/core/db-config.module';
import { CreateUserDto } from './dto/create-user.dto';

describe('RsUsersService', () => {
  let service: RsUsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [RsUsersService],
      imports: [
        DbConfigModule,
        MongooseModule.forFeature([{ name: User.name, schema: userSchema }]),
      ],
    }).compile();

    service = module.get<RsUsersService>(RsUsersService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
