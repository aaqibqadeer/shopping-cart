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
@UseGuards(AuthGuard)
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
  create(@Body() product: ProductInterface) {
    return this.productService.createProduct(product);
  }

  @Put(':id')
  update(@Body() product: ProductInterface, @Param('id') id: string) {
    return this.productService.updateProduct(id, product);
  }

  @Delete(':id')
  delete(@Param('id') id: string) {
    return this.productService.deleteProduct(id);
  }
}
