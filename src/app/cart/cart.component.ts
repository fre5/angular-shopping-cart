import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';  
import { CartService } from '../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
    this.cart = this.cartService.cart;
  };

  addQty(id: number): void {
    this.cartService.addQty(id);
  }

  removeQty(id: number): void {
    this.cartService.removeQty(id);
    this.cart = this.cartService.cart;
  }

  removeItem(id: number): void {
    this.cartService.removeItem(id);
    this.cart = this.cartService.cart;
  }
}
