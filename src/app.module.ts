import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { ProductosModule } from './productos/productos.module';


/* @Module({
  imports: [MongooseModule.forRoot('mongodb+srv://root:root@cluster0.j4zse.mongodb.net/ecommerce2?retryWrites=true&w=majority'), ProductosModule],
}) */

@Module({
  imports: [ProductosModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
