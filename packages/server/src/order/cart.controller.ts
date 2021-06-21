import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Post,
  Put,
} from '@nestjs/common';
import { CartService } from './';

@Controller('cart')
export class CartController {
  constructor(private readonly cartService: CartService) {}

  @Get()
  getCart() {
    return this.cartService.findAll();
  }

  // @Put(':id')
  // updateQuantity(@Param('id') id: string, @Body() body: any) {
  //   return this.cartService.update(id, body);
  // }

  // @Post()
  // addItem(@Body() body: any) {
  //   return this.cartService.add();
  // }

  // @Delete(':id')
  // removeItem(@Param('id') id: string) {
  //   return this.cartService.findAll();
  // }

  // @Delete('/empty')
  // clearBasket() {
  //   return this.cartService.findAll();
  }
}
