import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { IsUnicEmail } from '../validations/is-unic-email.validator';
import { IsValidEmail } from '../validations/is-valid-email.validator';
import { IsValidPassword } from '../validations/is-valid-password.validator';
import { ApiProperty } from '@nestjs/swagger';

export class CreateUserDto {
  @ApiProperty()
  @IsString()
  @MaxLength(120)
  firstName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  lastName: string;

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  company: string;

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  @IsOptional()
  jobTitle?: string;

  @ApiProperty()
  @IsString()
  @IsUnicEmail()
  @IsValidEmail()
  workEmail: string;

  @ApiProperty()
  @IsString()
  @MaxLength(120)
  @MinLength(8)
  @IsValidPassword()
  password: string;
}
