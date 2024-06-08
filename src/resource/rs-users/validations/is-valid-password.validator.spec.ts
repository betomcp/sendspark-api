import { IsValidPasswordValidator } from './is-valid-password.validator';

let passwordValidator: IsValidPasswordValidator;
const validPasswords = ['Password1', '1MyPassword', 'PASSWORD2'];
const invalidPasswords = ['sas', 'password', 'Password', 'password1'];

describe('Is valid email validator', () => {
  beforeEach(() => {
    passwordValidator = new IsValidPasswordValidator();
  });

  test.each(validPasswords)('should return true', (v) => {
    expect(passwordValidator.validate(v)).toBeTruthy();
  });
  test.each(invalidPasswords)('should return false', (v) => {
    expect(passwordValidator.validate(v)).toBeFalsy();
  });
});
