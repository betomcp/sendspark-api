import { Injectable } from '@nestjs/common';
import {
  ValidationArguments,
  ValidationOptions,
  ValidatorConstraint,
  ValidatorConstraintInterface,
  registerDecorator,
} from 'class-validator';
import { RsUsersService } from '../rs-users.service';

@Injectable()
@ValidatorConstraint()
export class IsValidPasswordValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments?: ValidationArguments): boolean {
    return this.hasDigitAndUppercase(value);
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'Password must have at least 8 characters, 1 digit and one uppercase letter';
  }

  private hasDigitAndUppercase(password: string) {
    const regex = /^(?=.*[A-Z])(?=.*\d).+$/;
    return regex.test(password);
  }
}

export const IsValidPassword = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: IsValidPasswordValidator,
    });
  };
};
