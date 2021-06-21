import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { cartSchema } from '../schema';
import { CartController, CartService } from './';

@Module({
  controllers: [CartController],
  providers: [CartService],
  imports: [MongooseModule.forFeature([{ name: 'Cart', schema: cartSchema }])],
})
export class CartModule {}
