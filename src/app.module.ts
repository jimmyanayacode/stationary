import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { CategoriesModule } from './categories/categories.module';
import { CommonModule } from './common/common.module';
import { EnvConfiguration } from './config/env.config';
import { ProductsModule } from './products/products.module';
import { SeedModule } from './seed/seed.module';
import { JoiValidationSchema } from './config/joi.validation';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [EnvConfiguration],
      validationSchema: JoiValidationSchema
    }),
            ProductsModule,
            CategoriesModule,
            SeedModule,
            MongooseModule.forRoot(process.env.MONGODB),
            CommonModule
          ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
