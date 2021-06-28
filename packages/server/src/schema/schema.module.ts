import { DynamicModule, Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';
import { orderSchema } from './order.schema';
import { productSchema } from './product.schema';

const schemaArray = [
  MongooseModule.forFeature([
    {
      name: 'User',
      schema: userSchema,
      collection: 'users',
    },
    {
      name: 'Order',
      schema: orderSchema,
      collection: 'orders',
    },
    {
      name: 'Product',
      schema: productSchema,
      collection: 'products',
    },
  ]),
];

@Global()
@Module({
  imports: schemaArray,
  exports: schemaArray,
})
export class SchemaModule {
  static forRoot(): DynamicModule {
    return {
      module: SchemaModule,
      exports: schemaArray,
    };
  }
}
