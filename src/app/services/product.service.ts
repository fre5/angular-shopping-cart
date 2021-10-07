import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  selectedId: number;

  constructor() {
    this.selectedId = 0;
  }

  getProducts() {
    return [
      {
        id: 1,
        image: '',
        name: 'Laptop',
        price: '$ 1000',
      },
      {
        id: 2,
        image: '',
        name: 'Desktop',
        price: '$ 1200',
      },
      {
        id: 3,
        image: '',
        name: 'Tablet',
        price: '$ 300',
      },
      {
        id: 4,
        image: '',
        name: 'Phone',
        price: '$ 500',
      },
      {
        id: 5,
        image: '',
        name: 'Smart Watch',
        price: '$ 300',
      }
    ];
  }

  getSelectedProduct(id: number) {
    return this.getProducts().filter(product => product.id === id)[0];
  }
}
