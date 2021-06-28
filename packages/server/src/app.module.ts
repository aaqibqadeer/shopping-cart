import { Module } from '@nestjs/common';
import { UserModule } from './user/user.module';
import { ProductModule } from './product/product.module';
import { OrderModule } from './order/order.module';
import { MongooseModule } from '@nestjs/mongoose';
import { SchemaModule } from './schema/schema.module';

@Module({
  imports: [
    UserModule,
    ProductModule,
    OrderModule,
    SchemaModule.forRoot(),
    MongooseModule.forRoot(
      'mongodb+srv://aaqib:1234@cluster0.cgljv.mongodb.net/cart?retryWrites=true&w=majority',
      { useFindAndModify: false },
    ),
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
