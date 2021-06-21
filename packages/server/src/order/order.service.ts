import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CartItem } from './cart-item.interface';
import { CheckoutDetails } from './checkout-details.interface';
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

  add(
    userId: string,
    productList: CartItem[],
    checkoutDetails: CheckoutDetails,
  ) {
    const order: Order = { userId, productList, checkoutDetails };
    return this.addProduct(order);
  }

  // update(
  //   id: string,
  //   title: string,
  //   price: number,
  //   description: string,
  //   imgUrl: string,
  // ) {
  //   const product: Product = { title, price, description, imgUrl };
  //   return this.updateProduct(id, product);
  // }

  // delete(id: string) {
  //   return this.deleteProduct(id);
  // }

  private async getAll() {
    const result = await this.orderModel.find({});
    return result;
  }

  private async get(id: string) {
    const result = await this.orderModel.findById(id);
    return result;
  }

  // async get(id: string) {
  //   const result = await this.orderModel.findById(id);
  //   return result;
  // }

  private async addProduct(order: Order) {
    const newOrder = new this.orderModel(order);
    const result = await newOrder.save();
    return result;
  }

  // async updateProduct(id: string, product: Product) {
  //   const updatedProduct = await this.orderModel.findByIdAndUpdate(
  //     id,
  //     product,
  //   );
  //   return updatedProduct;
  // }

  // async deleteProduct(id: string) {
  //   const deleteProduct = await this.orderModel.findByIdAndDelete(id);
  //   return deleteProduct;
  // }
}
