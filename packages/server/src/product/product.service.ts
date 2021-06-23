import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Document, Query, Model } from 'mongoose';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { Product } from './product.interface';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product') private readonly productModel: Model<Product>,
  ) {}

  findAll(): Query<
    (Product & Document<any, any>)[],
    Product & Document<any, any>
  > {
    return this.getItems();
  }

  find(id: string): Promise<(Product & Document<any, any>) | null> {
    return this.getItem(id);
  }

  createProduct(
    product: CreateProductDto,
  ): Promise<Product & Document<any, any>> {
    return this.addItem(product);
  }

  updateProduct(
    id: string,
    product: UpdateProductDto,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.updateItem(id, product);
  }

  deleteProduct(
    id: string,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.deleteItem(id);
  }

  private getItems(): Query<
    (Product & Document<any, any>)[],
    Product & Document<any, any>
  > {
    return this.productModel.find({});
  }

  private async getItem(
    id: string,
  ): Promise<(Product & Document<any, any>) | null> {
    return this.productModel.findById(id);
  }

  private addItem(product: Product): Promise<Product & Document<any, any>> {
    const newProduct = new this.productModel(product);
    return newProduct.save();
  }

  private updateItem(
    id: string,
    product: Product,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.productModel.findByIdAndUpdate(id, product);
  }

  private deleteItem(
    id: string,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.productModel.findByIdAndDelete(id);
  }
}
