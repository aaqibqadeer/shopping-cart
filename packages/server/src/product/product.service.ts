import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { ProductInterface } from './product.interface';
import { defaultInternalServerErrorResponse } from '../common/errors';

@Injectable()
export class ProductService {
  constructor(
    @InjectModel('Product')
    private readonly productModel: Model<ProductInterface>,
  ) {}

  findAll(): Promise<ProductInterface[]> {
    return this.getItems();
  }

  find(id: string): Promise<ProductInterface> {
    return this.getItem(id, null);
  }

  createProduct(product: ProductInterface): Promise<ProductInterface> {
    return this.addItem(product);
  }

  updateProduct(
    id: string,
    product: ProductInterface,
  ): Promise<ProductInterface> {
    return this.updateItem(id, product, null);
  }

  deleteProduct(id: string): Promise<ProductInterface> {
    return this.deleteItem(id, null);
  }

  async getItems(): Promise<ProductInterface[]> {
    try {
      return this.productModel.find({}).exec();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async getItem(id: string, projection: unknown): Promise<ProductInterface> {
    try {
      return this.productModel.findById(id).select(projection).lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async addItem(product: ProductInterface): Promise<ProductInterface> {
    try {
      const newProduct = new this.productModel(product);
      return newProduct.save();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async updateItem(
    id: string,
    product: ProductInterface,
    projection: unknown,
  ): Promise<ProductInterface> {
    try {
      return this.productModel
        .findByIdAndUpdate(id, product)
        .select(projection)
        .lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }

  async deleteItem(id: string, projection: unknown): Promise<ProductInterface> {
    try {
      return this.productModel.findByIdAndDelete(id).select(projection).lean();
    } catch (error) {
      throw new InternalServerErrorException(
        defaultInternalServerErrorResponse,
      );
    }
  }
}
