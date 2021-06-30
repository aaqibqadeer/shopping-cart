import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { ProductService } from './product.service';
import { ProductInterface } from './product.interface';
import { AuthGuard } from '../common/guard/auth.guard';

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

  @UseGuards(AuthGuard)
  @Post()
  create(@Body() product: ProductInterface) {
    return this.productService.createProduct(product);
  }

  @UseGuards(AuthGuard)
  @Put(':id')
  update(@Body() product: ProductInterface, @Param('id') id: string) {
    return this.productService.updateProduct(id, product);
  }

  @UseGuards(AuthGuard)
  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
