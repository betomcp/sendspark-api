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
export class IsValidEmailValidator implements ValidatorConstraintInterface {
  validate(value: string, validationArguments?: ValidationArguments): boolean {
    const splitEmail = value.split('@');
    // verify if email has just one "@"
    if (splitEmail.length != 2) return false;

    const splitRightSide = splitEmail[1].split('.');
    // verify if email has at least one dot after the @ with strings before and after
    if (splitRightSide.length < 2) return false;

    return true;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'Email is invalid';
  }
}

export const IsValidEmail = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: IsValidEmailValidator,
    });
  };
};
