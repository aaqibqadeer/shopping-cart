import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Cart } from './';

@Injectable()
export class CartService {
  constructor(@InjectModel('Cart') private readonly cartModel: Model<Cart>) {}

  findAll() {
    return this.getAll();
  }

  // add(title: string, price: number, description: string, imgUrl: string) {
  //   const product: Product = { title, price, description, imgUrl };
  //   return this.addProduct(product);
  // }

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

  async getAll() {
    const result = await this.cartModel.find({});
    return result;
  }

  // async get(id: string) {
  //   const result = await this.orderModel.findById(id);
  //   return result;
  // }

  // async addProduct(order: Order) {
  //   const newProduct = new this.orderModel(product);
  //   const result = await newProduct.save();
  //   return result;
  // }

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
