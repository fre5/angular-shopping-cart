export class Cart {
  id: number;
  image: string;
  name: string;
  price: string;
  productId: number;
  quantity: number;

  constructor() {
    this.id = 0;
    this.image = '';
    this.name = '';
    this.price = '';
    this.productId = 0;
    this.quantity = 0;
  }
}