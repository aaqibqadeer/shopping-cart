import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  findAll() {
    return this.getAll();
  }

  find(id: string) {
    return this.get(id);
  }

  async login(loginDto: LoginDto) {
    const result = await this.isUserExist(loginDto.email, loginDto.password);
    return result;
  }

  register(registerDto: RegisterDto) {
    const user: User = {
      name: registerDto.name,
      email: registerDto.email,
      password: registerDto.password,
    };
    return this.addUser(user);
  }

  private async addUser(user: User) {
    const newUser = new this.userModel(user);
    const result = await newUser.save();
    return result;
  }

  private async getAll() {
    const result = await this.userModel.find({});
    const updatedResult = result.map((user) => {
      const { _id, name, email, ...userInfo } = user;
      return { _id, name, email };
    });
    return updatedResult;
  }

  private async allUsers() {
    const result = await this.userModel.find({});
    return result;
  }

  private async get(id: string) {
    const result = await this.userModel.findById(id);
    const updatedResult = JSON.parse(JSON.stringify(result));
    const { password, ...userInfo } = updatedResult;
    return userInfo;
  }

  private async isUserExist(email: string, password: string) {
    const allUsers = await this.allUsers();
    const userExist = allUsers.find(
      (user) => user.email === email && user.password === password,
    );
    return userExist ? true : false;
  }
}
