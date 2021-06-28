import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { UserInterface } from './user.interface';
import { defaultInternalServerErrorResponse } from '../common/errors';

@Injectable()
export class UserService {
  constructor(
    @InjectModel('User') private readonly userModel: Model<UserInterface>,
  ) {}

  findAll() {
    return this.getUsers();
  }

  find(id: string): Promise<UserInterface> {
    return this.getUser(id, null);
  }

  async login(
    user: UserInterface,
    session: Record<string, any>,
  ): Promise<boolean> {
    const result = await this.isUserExist(user.email, user.password);
    if (result) {
      session.user = user;
    }
    return result;
  }

  register(user: UserInterface): Promise<UserInterface> {
    return this.addUser(user);
  }

  addUser(user: UserInterface): Promise<UserInterface> {
    try {
      const newUser = new this.userModel(user);
      return newUser.save();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  getUsers(): Promise<UserInterface[]> {
    try {
      return this.userModel.find({}, '_id name email').exec();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async getUser(id: string, projection: unknown): Promise<UserInterface> {
    try {
      return this.userModel
        .findById(id, '_id name email')
        .select(projection)
        .lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async isUserExist(email?: string, password?: string): Promise<boolean> {
    try {
      const user = await this.userModel.findOne({ email: email });
      return !!user && user.password === password;
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }
}
