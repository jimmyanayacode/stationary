import { Module } from '@nestjs/common';
import { ProductsController } from './products.controller';
import { ProductsService } from './products.service';
import { MongooseModule } from '@nestjs/mongoose';
import { Product, ProductSchema } from './entities/product.entity';
import { ConfigModule } from '@nestjs/config';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  exports: [ProductsService, MongooseModule],
  imports: [
    ConfigModule,
    MongooseModule.forFeature([
      {
        name: Product.name,
        schema: ProductSchema,
      }
    ])
  ]
})
export class ProductsModule {}
