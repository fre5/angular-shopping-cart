import { Product } from './Product';

export class Cart {
  id: number;
  url: string;
  name: string;
  price: string;
  description: string;
  quantity: number;

  constructor() {
    this.id = 0;
    this.url = '';
    this.name = '';
    this.price = '';
    this.description = '';
    this.quantity = 0;
  }
}