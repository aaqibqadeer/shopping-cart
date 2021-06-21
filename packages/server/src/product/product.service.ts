import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  findAll() {
    return this.getAll();
  }

  find(id: string) {
    return this.get(id);
  }

  create(title: string, price: number, description: string, imgUrl: string) {
    const product: Product = { title, price, description, imgUrl };
    return this.addProduct(product);
  }

  update(
    id: string,
    title: string,
    price: number,
    description: string,
    imgUrl: string,
  ) {
    const product: Product = { title, price, description, imgUrl };
    return this.updateProduct(id, product);
  }

  delete(id: string) {
    return this.deleteProduct(id);
  }

  private async getAll() {
    const result = await this.productModel.find({});
    return result;
  }

  private async get(id: string) {
    const result = await this.productModel.findById(id);
    return result;
  }

  private async addProduct(product: Product) {
    const newProduct = new this.productModel(product);
    const result = await newProduct.save();
    return result;
  }

  private async updateProduct(id: string, product: Product) {
    const updatedProduct = await this.productModel.findByIdAndUpdate(
      id,
      product,
    );
    return updatedProduct;
  }

  private async deleteProduct(id: string) {
    const deleteProduct = await this.productModel.findByIdAndDelete(id);
    return deleteProduct;
  }
}
