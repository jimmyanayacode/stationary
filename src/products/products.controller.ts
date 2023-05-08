import { Body, Controller, Delete, Get, Param, ParseUUIDPipe, Patch, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ProductsService } from './products.service';
import { CreateProductDto, UpdateProductDto } from './dto';
import { ParseMongoIdPipe } from 'src/common/pipes/parse-mongo-id/parse-mongo-id.pipe';

@Controller('products')
/*@UsePipes( ValidationPipe ) */
export class ProductsController {
  constructor(private productsService: ProductsService) {}

  @Get()
  getAllProducts() {
    return this.productsService.getProducts;
  }

  @Get(':term')
  getProductById(@Param('term') term: string) {
    return this.productsService.findProductByTerm(term);
  }

  @Post()
  createProduct(@Body() createProductDto: CreateProductDto) {
    return this.productsService.createProduct(createProductDto);
  }

  @Patch(':term')
  updateProduct(@Param('term') term:string, @Body() updateProduct:UpdateProductDto) {
    return this.productsService.updateProduct( term, updateProduct)
  }

  @Delete(':id')
  deleteProduct(@Param('id', ParseMongoIdPipe) id:string) {
    return this.productsService.deleteProduct( id );
  }
}
