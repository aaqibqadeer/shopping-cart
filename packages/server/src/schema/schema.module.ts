import { DynamicModule, Global, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { userSchema } from './user.schema';

const schemaArray = [
  MongooseModule.forFeature([
    {
      name: 'User',
      schema: userSchema,
      collection: 'users',
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
