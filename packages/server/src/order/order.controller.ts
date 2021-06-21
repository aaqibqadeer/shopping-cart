import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { OrderService } from './order.service';

@Controller('order')
export class CartController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders() {
    return this.orderService.findAll();
  }

  @Get(':id')
  getOrder(@Param('id') id: string) {
    return this.orderService.find(id);
  }

  @Post()
  addOrder(@Body() body: any) {
    // console.log();
    // return body;
    return this.orderService.add(
      body.userId,
      body.productList,
      body.checkoutDetails,
    );
  }

  // @Delete(':id')
  // removeItem(@Param('id') id: string) {
  //   return 'Delete Method';
  // }

  // @Delete('/empty')
  // clearBasket() {
  //   return 'Delete basket';
  // }
}
