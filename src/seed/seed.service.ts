import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { PRODUCTS } from './data/products.seed';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Product.name )
    private readonly productmodel:Model<Product>
  ){}

  async createFakeProduct() {
      await this.productmodel.deleteMany({});
      await this.productmodel.insertMany(PRODUCTS)
      return `Seed execute`
    
  } 
}
 

