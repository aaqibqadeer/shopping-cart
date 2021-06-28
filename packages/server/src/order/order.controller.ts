import { Body, Controller, Get, Param, Post, UseGuards } from '@nestjs/common';
import { OrderService } from './order.service';
import { OrderInterface } from './order.interface';
import { AuthGuard } from '../common/guard/auth.guard';

@Controller('order')
@UseGuards(AuthGuard)
export class CartController {
  constructor(private readonly orderService: OrderService) {}

  @Get()
  getOrders(): Promise<OrderInterface[]> {
    return this.orderService.findAll();
  }

  @Get('/user/:id')
  getOrdersByUserId(@Param('id') id: string): Promise<OrderInterface[]> {
    return this.orderService.findByUserId(id);
  }

  @Get(':id')
  getOrder(@Param('id') id: string): Promise<OrderInterface> {
    return this.orderService.find(id);
  }

  @Post()
  addOrder(@Body() order: OrderInterface): Promise<OrderInterface> {
    return this.orderService.addOrder(order);
  }
}
