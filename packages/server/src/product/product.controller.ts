import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CreateProductDto } from './dto/create-product.dto';
import { UpdateProductDto } from './dto/update-product.dto';
import { ProductService } from './product.service';
import { Document, Query } from 'mongoose';
import { Product } from './product.interface';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll(): Query<
    (Product & Document<any, any>)[],
    Product & Document<any, any>
  > {
    return this.productService.findAll();
  }

  @Get(':id')
  find(
    @Param('id') id: string,
  ): Promise<(Product & Document<any, any>) | null> {
    return this.productService.find(id);
  }

  @Post()
  create(
    @Body() product: CreateProductDto,
  ): Promise<Product & Document<any, any>> {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  update(
    @Body() product: UpdateProductDto,
    @Param('id') id: string,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  delete(
    @Param('id') id: string,
  ): Query<
    (Product & Document<any, any>) | null,
    Product & Document<any, any>
  > {
    return this.productService.deleteProduct(id);
  }
}
