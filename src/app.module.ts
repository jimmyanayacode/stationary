import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { SeedModule } from './seed/seed.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CommonModule } from './common/common.module';

@Module({
  imports: [ProductsModule,
            CategoriesModule,
            SeedModule,
            MongooseModule.forRoot('mongodb://localhost:27017/nest-stationary'),
            CommonModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
