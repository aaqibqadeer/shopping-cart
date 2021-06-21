import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  async login(email: string, password: string) {
    const result = await this.isUserExist(email, password);
    return result;
  }

  register(name: string, email: string, password: string) {
    const user: User = { name, email, password };
    return this.addUser(user);
  }

  async addUser(user: User) {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  async allUsers() {
    const result = await this.userModel.find({});
    return result;
  }

  async isUserExist(email: string, password: string) {
    const allUsers = await this.allUsers();
    const userExist = allUsers.find(
      (user) => user.email === email && user.password === password,
    );
    return userExist ? true : false;
  }
}
