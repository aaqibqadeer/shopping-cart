import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { ProductService } from './product.service';

@Controller('product')
export class ProductController {
  constructor(private readonly productService: ProductService) {}

  @Get()
  findAll() {
    return this.productService.findAll();
  }

  @Get(':id')
  find(@Param('id') id: string) {
    return this.productService.find(id);
  }

  @Post()
  create(@Body() body: any) {
    return this.productService.create(
      body.title,
      body.price,
      body.description,
      body.imgUrl,
    );
  }

  @Put(':id')
  update(@Body() body: any, @Param('id') id: string) {
    return this.productService.update(
      id,
      body.title,
      body.price,
      body.description,
      body.imgUrl,
    );
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.delete(id);
  }
}
