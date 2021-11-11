import { hashSync } from 'bcrypt';

export function makePassword(string: string) {
  return hashSync(string, 'rndom');
}

export function validatePassword(string: string, hashedString: string) {
  return '';
}
