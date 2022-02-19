import { Injectable } from '@nestjs/common';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';

@Injectable()
export class UsersService {
  private readonly users = [
    {
      id: 1,
      username: 'mubarak',
      password: 'mubarak123'
    },
    {
      id: 2,
      username: 'abdi',
      password: 'abdi123'
    },
  ];
  create(createUserInput: CreateUserInput) {
    const user = {
      ...createUserInput,
      id: this.users.length +1,
    }
    this.users.push(user);
    return user;
  }

  findAll() {
    return this.users;
  }

  findOne(username: string) {
    return this.users.find((user) => user.username === username)
  }

  
}
