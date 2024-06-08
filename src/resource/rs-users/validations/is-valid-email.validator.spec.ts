import { IsValidEmailValidator } from './is-valid-email.validator';

let emailValidator: IsValidEmailValidator;
const validEmails = ['email@email.com', 'my.email@email.com.br'];
const invaildEmails = [
  'email@emailcom',
  'my.emailemail.com.br',
  'email@@email.com',
];

describe('Is valid email validator', () => {
  beforeEach(() => {
    emailValidator = new IsValidEmailValidator();
  });

  test.each(validEmails)('should return true', (v) => {
    expect(emailValidator.validate(v)).toBeTruthy();
  });
  test.each(invaildEmails)('should return false', (v) => {
    expect(emailValidator.validate(v)).toBeFalsy();
  });
});
