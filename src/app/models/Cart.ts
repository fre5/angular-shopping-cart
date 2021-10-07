import { Product } from './Product';

export class Cart {
  id: number;
  image: string;
  name: string;
  price: string;
  quantity: number;

  constructor() {
    this.id = 0;
    this.image = '';
    this.name = '';
    this.price = '';
    this.quantity = 0;
  }
}