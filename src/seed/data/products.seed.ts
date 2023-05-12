
import { faker } from '@faker-js/faker';
import { Product } from 'src/products/interfaces/products.interface';

export const PRODUCTS = [];

export function createRandomProduct(): Product {
    return {
        name: faker.commerce.productName(),
        priceSale: +faker.commerce.price(50, 200),
        priceCost: +faker.commerce.price(20, 50),
        category: faker.commerce.department()
    };
  }

  Array.from({ length:50 }).forEach(() => {
    PRODUCTS.push(createRandomProduct());
  });
