import { Component, OnInit, Input } from '@angular/core';
import { Cart } from '../models/Cart';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.css']
})
export class CartItemComponent implements OnInit {
  @Input() cartItem: Cart;

  constructor() { 
    this.cartItem = {
      id: 0,
      image: '',
      name: '',
      price: '',
      productId: 0,
      quantity: 0
    }
  }

  ngOnInit(): void {

  }

  addQuantity(id: number): void {
    console.log(`Add quantity of item with id: ${id}`);
  }

  removeQuantity(id: number): void {
    console.log(`Remove quantity of item with id: ${id}`);
  }

  removeFromCart(id: number): void {
    console.log(`Removed item id: ${id} from cart`);
  }

}
