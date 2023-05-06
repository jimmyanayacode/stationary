import { Controller, Get, Param } from '@nestjs/common';
import { ProductsService } from './products.service';

@Controller('products')
export class ProductsController {
  constructor(private readonly productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getProducts;
  }

  @Get(':id')
  getProductById(@Param('id') id: string) {
    if (this.productsService.getProducts.length < parseInt(id))
      return 'No existe producto';
    return this.productsService.findProductById(+id);
  }
}
