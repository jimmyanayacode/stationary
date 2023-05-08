import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateCategoryDto } from './dto/create-category.dto';
import { UpdateCategoryDto } from './dto/update-category.dto';
import { Category } from './entities/category.entity';
import { v4 as uuid } from 'uuid';

@Injectable()
export class CategoriesService {

 private categories: Category[] = [
    /* {
      id: uuid(),
      name: 'lapiceros',
      createdAt: new Date().getTime()
    } */
  ]

  create(createCategoryDto: CreateCategoryDto) {

    
    return `All categories`;
  }

  findAll() {
    return this.categories;
  }

  findOne(id: string) {
    const category = this.categories.find( brand => brand.id == id );
    if ( !category ) throw new NotFoundException(`Category with id ${ id } not found`)
    return category
  }

  update(id: string, updateCategoryDto: UpdateCategoryDto) {
    
    return `Category by id`
  }

  remove(id: string) {
    this.categories = this.categories.filter( category => category.id !== id )
    return `Category removes with id #${id}`;
  }

  fillCategoriesWithSeedData( category:Category[] ) {
    this.categories = category;
  }
}
