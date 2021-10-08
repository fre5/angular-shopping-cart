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
        url: '',
        name: 'Laptop',
        price: '1000.00',
        description: ''
      },
      {
        id: 2,
        url: '',
        name: 'Desktop',
        price: '1200.00',
        description: ''
      },
      {
        id: 3,
        url: '',
        name: 'Tablet',
        price: '300.00',
        description: ''
      },
      {
        id: 4,
        url: '',
        name: 'Phone',
        price: '500.00',
        description: ''
      },
      {
        id: 5,
        url: '',
        name: 'Smart Watch',
        price: '300.00',
        description: ''
      }
    ];
  }

  getSelectedProduct(id: number) {
    return this.getProducts().filter(product => product.id === id)[0];
  }
}
