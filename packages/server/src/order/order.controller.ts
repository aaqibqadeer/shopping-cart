import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { OrderDto } from './dto/order.dto';
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
  addOrder(@Body() orderDto: OrderDto) {
    return this.orderService.add(orderDto);
  }
}
