import { Injectable } from '@nestjs/common';

@Injectable()
export class ProductsService {
  private products = [
    {
      id: 1,
      name: 'Borrador',
      priceSale: 500,
      priceCost: 400,
      category: 1,
    },
    {
      id: 2,
      name: 'Lapiz',
      priceSale: 1000,
      priceCost: 700,
      category: 2,
    },
    {
      id: 3,
      name: 'Zacapunta',
      priceSale: 1500,
      priceCost: 800,
      category: 3,
    },
  ];

  get getProducts() {
    return [...this.products];
  }

  findProductById(id: number) {
    const product = this.products.find((product) => product.id === id);
    return product;
  }
}
