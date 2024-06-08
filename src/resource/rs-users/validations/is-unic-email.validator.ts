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
@ValidatorConstraint({ async: true })
export class IsUnicEmailValidator implements ValidatorConstraintInterface {
  constructor(private rsUserService: RsUsersService) {}

  async validate(
    value: string,
    validationArguments?: ValidationArguments,
  ): Promise<boolean> {
    const userExists = await this.rsUserService.findByEmail(value);
    if (userExists) return false;
    return true;
  }

  defaultMessage?(validationArguments?: ValidationArguments): string {
    return 'Email already exists';
  }
}

export const IsUnicEmail = (validationOptions?: ValidationOptions) => {
  return (object: object, property: string) => {
    registerDecorator({
      target: object.constructor,
      propertyName: property,
      options: validationOptions,
      constraints: [],
      validator: IsUnicEmailValidator,
    });
  };
};
