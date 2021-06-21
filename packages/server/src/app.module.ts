import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user';
import { ProductModule } from './product';
import { CartModule } from './order';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    UserModule,
    ProductModule,
    CartModule,
    MongooseModule.forRoot(
      'mongodb+srv://aaqib:1234@cluster0.cgljv.mongodb.net/cart?retryWrites=true&w=majority',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
