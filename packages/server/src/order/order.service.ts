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

  find(id: string): Promise<OrderInterface> {
    return this.getItem(id, null);
  }

  findByUserId(id: string): Promise<OrderInterface[]> {
    return this.getItemByUserId(id, null);
  }

  addOrder(order: OrderInterface): Promise<OrderInterface> {
    return this.addItem(order);
  }

  private getItems(): Promise<OrderInterface[]> {
    try {
      return this.orderModel.find({}).exec();
    } catch (error) {
      throw new InternalServerErrorException(error);
    }
  }

  private async getItem(
    id: string,
    projection: unknown,
  ): Promise<OrderInterface> {
    try {
      return this.orderModel.findById(id).select(projection).lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  private getItemByUserId(
    id: string,
    projection: unknown,
  ): Promise<OrderInterface[]> {
    try {
      return this.orderModel.find({ userId: id }).projection(projection).lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  private async addItem(order: OrderInterface): Promise<OrderInterface> {
    const newOrder = new this.orderModel(order);
    try {
      return newOrder.save();
    } catch (error) {
      return error;
    }
  }
}
