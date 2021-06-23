import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model, Document } from 'mongoose';
import { LoginDto } from './dto/login.dto';
import { RegisterDto } from './dto/register.dto';
import { User } from './user.interface';

@Injectable()
export class UserService {
  constructor(@InjectModel('User') private readonly userModel: Model<User>) {}

  findAll() {
    return this.getUsers();
  }

  find(id: string) {
    return this.getUser(id);
  }

  async login(user: LoginDto, session: Record<string, any>): Promise<boolean> {
    const result = await this.isUserExist(user.email, user.password);
    if (result) {
      session.user = user;
    }
    return result;
  }

  register(user: RegisterDto): Promise<User & Document<any, any>> {
    return this.addUser(user);
  }

  private addUser(user: User): Promise<User & Document<any, any>> {
    const newUser = new this.userModel(user);
    return newUser.save();
  }

  private getUsers() {
    return this.userModel.find({}, '_id name email');
  }

  private async getUser(id: string) {
    return this.userModel.findById(id, '_id name email');
  }

  private async isUserExist(email: string, password: string): Promise<boolean> {
    const user = await this.userModel.findOne({ email: email });
    return !!user && user.password === password;
  }
}
