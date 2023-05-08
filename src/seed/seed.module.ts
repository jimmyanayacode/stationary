import { Module } from '@nestjs/common';
import { SeedService } from './seed.service';
import { SeedController } from './seed.controller';
import { ProductsModule } from 'src/products/products.module';
import { CategoriesModule } from 'src/categories/categories.module';

@Module({
  controllers: [SeedController],
  providers: [SeedService],
  imports: [ProductsModule, CategoriesModule]
})
export class SeedModule {}
