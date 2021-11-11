import { CreateManyUserArgs } from 'nest/app/models';
import * as faker from 'faker';
// import * as faker from 'faker/locale/id_ID';
faker.setLocale('id_ID');

function generate() {
  const result: CreateManyUserArgs = {
    data: [],
  };
  for (let i = 0; i < 100; i++) {
    result.data.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      phone: faker.phone.phoneNumber('(+62)8##########'),
      password: '123456',
    });
  }
  return result;
}

export const UserSeed: CreateManyUserArgs = generate();
