import { IsOptional, IsString, MaxLength, MinLength } from 'class-validator';
import { IsUnicEmail } from '../validations/is-unic-email.validator';
import { IsValidEmail } from '../validations/is-valid-email.validator';
import { IsValidPassword } from '../validations/is-valid-password.validator';

export class CreateUserDto {
  @IsString()
  @MaxLength(120)
  firstName: string;

  @IsString()
  @MaxLength(120)
  lastName: string;

  @IsString()
  @MaxLength(120)
  company: string;

  @IsString()
  @MaxLength(120)
  @IsOptional()
  jobTitle?: string;

  @IsString()
  @IsUnicEmail()
  @IsValidEmail()
  workEmail: string;

  @IsString()
  @MaxLength(120)
  @MinLength(8)
  @IsValidPassword()
  password: string;
}
