import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartItem } from './cart-item.interface';
import { CheckoutDetails } from './checkout-details.interface';
import { OrderDto } from './dto/order.dto';
import { Order } from './order.interface';

@Injectable()
export class OrderService {
  constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
  ) {}

  findAll() {
    return this.getAll();
  }

  find(id: string) {
    return this.get(id);
  }

  add(orderDto: OrderDto) {
    const order: Order = {
      userId: orderDto.userId,
      productList: orderDto.productList,
      checkoutDetails: orderDto.checkoutDetails,
    };
    return this.addProduct(order);
  }

  private async getAll() {
    const result = await this.orderModel.find({});
    return result;
  }

  private async get(id: string) {
    const result = await this.orderModel.findById(id);
    return result;
  }

  private async addProduct(order: Order) {
    const newOrder = new this.orderModel(order);
    const result = await newOrder.save();
    return result;
  }
}
