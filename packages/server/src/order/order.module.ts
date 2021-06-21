import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { orderSchema } from '../schema/order.schema';
import { CartController } from './order.controller';
import { OrderService } from './order.service';

@Module({
  controllers: [CartController],
  providers: [OrderService],
  imports: [
    MongooseModule.forFeature([{ name: 'Order', schema: orderSchema }]),
  ],
})
export class OrderModule {}
