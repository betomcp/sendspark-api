import { Test, TestingModule } from '@nestjs/testing';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

describe('AuthService', () => {
  let service: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [AuthService],
      imports: [
        PassportModule,
        JwtModule.register({
          secret: 'jjsbjsaknjsksjbdksk',
          signOptions: { expiresIn: '6h' },
        }),
      ],
    }).compile();

    service = module.get<AuthService>(AuthService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('should return a token object', () => {
    expect(
      typeof service.login({
        firstName: 'lucas',
        _id: '12344',
        lastName: 'martins',
        company: 'sendspark',
        password: '1234GG3dd',
        workEmail: 'email@email.com',
      }),
    ).toBe(typeof { access_token: 'token' });
  });
});
