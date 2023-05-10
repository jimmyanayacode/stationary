import { faker } from '@faker-js/faker';
import { Injectable } from '@nestjs/common';
import { Product } from 'src/products/entities/product.entity';
import { ProductsService } from 'src/products/products.service';
import { PRODUCTS, createRandomProduct } from './data/products.seed';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { CreateProductDto } from '../products/dto/create-product.dto';


@Injectable()
export class SeedService {

  constructor(
    @InjectModel( Product.name )
    private readonly productmodel:Model<Product>
  ){}

  async createFakeProduct() {
    
      await this.productmodel.insertMany(PRODUCTS)
      return `Seed execute`
    
  } 
}
 

