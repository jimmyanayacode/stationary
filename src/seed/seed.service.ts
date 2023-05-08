import { Injectable } from '@nestjs/common';
import { ProductsService } from 'src/products/products.service';
import { PRODUCTS_SEED } from './data/products.seed';
import { CategoriesService } from 'src/categories/categories.service';
import { CATEGORIES_SEED } from './data/categories.seed';

@Injectable()
export class SeedService {

  constructor( 
    private readonly productService:ProductsService,
    private readonly categoriesService:CategoriesService
  ){}

  populateDb() {
    this.productService.fillProductsWithSeedData( PRODUCTS_SEED )
    this.categoriesService.fillCategoriesWithSeedData( CATEGORIES_SEED )
    return `seed executed`;
  }
 
}
