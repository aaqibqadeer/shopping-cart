import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { OrderInterface } from './order.interface';
import { defaultInternalServerErrorResponse } from '../common/errors';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<OrderInterface>,
  ) {}

  findAll(): Promise<OrderInterface[]> {
    return this.getItems();
  }

  async find(id: string): Promise<OrderInterface> {
    try {
      const result = await this.getItem(id, null);
      return result;
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async findByUserId(id: string) {
    const result = await this.getItemByUserId(id);
    if (result.length === 0) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    } else {
      return result;
    }
  }

  addOrder(order: OrderInterface): Promise<OrderInterface> {
    return this.addItem(order);
  }

  getItems(): Promise<OrderInterface[]> {
    try {
      return this.orderModel.find({}).exec();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async getItem(id: string, projection: unknown): Promise<OrderInterface> {
    try {
      return this.orderModel.findById(id).select(projection).lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  getItemByUserId(id: string): Promise<OrderInterface[]> {
    try {
      return this.orderModel.find({ userId: id }).exec();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async addItem(order: OrderInterface): Promise<OrderInterface> {
    const newOrder = new this.orderModel(order);
    try {
      return newOrder.save();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }
}
