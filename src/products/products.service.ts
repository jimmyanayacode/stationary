import { BadRequestException, Injectable, InternalServerErrorException, NotFoundException } from '@nestjs/common';
import { Product } from './entities/product.entity';
import { CreateProductDto, UpdateProductDto } from './dto'
import { Model, isValidObjectId } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ProductsService {

  constructor ( 
    @InjectModel( Product.name )
    private readonly productModel : Model<Product>
    ){}

  private products:Product[] = [
    /* {
      id: uuid(),
      name: 'Borrador',
      priceSale: '500',
      priceCost: '400',
      category: '1',
    }, */
  ];

  get getProducts() {
    return [...this.products];
  }

  async findProductByTerm( term: string ) {

    let product : Product; 

    // MongoId
    if ( isValidObjectId( term ) ) {
      product = await this.productModel.findById( term )
    } 

    // Name
    if ( !product ) {
      product = await this.productModel.findOne({ name: term.toLocaleLowerCase().trim() })
    } 
    
    if ( !product ) {
      throw new NotFoundException(`Product ${term} isn't exist in bd`)
    }  
    
    return product;
    
  }

  async createProduct(createProductDto:CreateProductDto){
    createProductDto.name = createProductDto.name.toLocaleLowerCase();

    try {
      const newProduct = await this.productModel.create( createProductDto );
      return newProduct  
    } catch (error) {
      this.duplicatePropertiError(error);
    }
    
  }  

  async updateProduct(term:string, updateProductDto:UpdateProductDto) {
    
    const product = await this.findProductByTerm(term);
    if ( updateProductDto.name ) updateProductDto.name = updateProductDto.name.toLocaleLowerCase();

    try {
      await product.updateOne( updateProductDto );
      return { ...product.toJSON(), ...updateProductDto };
    } catch (error) {
      this.duplicatePropertiError( error )
    }

  }

  async deleteProduct(id:string){
    /* const product = await this.findProductByTerm(id);
    await product.deleteOne();
    return `Product delete` */
    const { deletedCount } = await this.productModel.deleteOne({ _id: id});
    if ( deletedCount === 0 ) {
      throw new BadRequestException(`Product with id ${ id } not found`);
    }
    return;
  }

  fillProductsWithSeedData( products:Product[] ) {
    this.products = products;
  }

  private duplicatePropertiError( error){
    if ( error.code === 11000) {
      throw new BadRequestException(`Product exists in db ${ JSON.stringify( error.keyValue )}`);
    }
    console.log(error);
    throw new InternalServerErrorException(`Can't create Product - Check server logs`);
  }

}

