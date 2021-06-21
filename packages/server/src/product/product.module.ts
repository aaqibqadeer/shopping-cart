import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { productSchema } from '../schema';
import { ProductController, ProductService } from './';

@Module({
  controllers: [ProductController],
  providers: [ProductService],
  imports: [
    MongooseModule.forFeature([{ name: 'Product', schema: productSchema }]),
  ],
})
export class ProductModule {}
