import { ApiProperty } from '@nestjs/swagger';
import { IsString } from 'class-validator';
import { IsValidEmail } from 'src/resource/rs-users/validations/is-valid-email.validator';

export class LogInDto {
  @ApiProperty()
  @IsString()
  @IsValidEmail()
  username: string;

  @ApiProperty()
  @IsString()
  password: string;
}
