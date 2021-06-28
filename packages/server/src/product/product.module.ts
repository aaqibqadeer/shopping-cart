import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from '../schema/product.schema';
import { ProductController } from './product.controller';
import { ProductService } from './product.service';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    // MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
  exports: [ProductService],
})
export class ProductModule {}
