import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[];
  currentId: number;

  constructor() { 
    this.cart = [];
    this.currentId = 0;
  }

  addToCart(cart: Cart): void {
    this.cart.forEach(item => {
      if (item.id === cart.id) {
        item.quantity += cart.quantity;
      } 
    });

    if (!(this.cart.map(item => item.id)).includes(cart.id)) {
      this.cart.push(cart);
    }
  }

  addQty(id: number): void {
    this.cart.forEach(item => {
      if (item.id === id) {
        item.quantity += 1;
      }
    });
  }

  removeQty(id: number): void {
    this.cart.forEach(item => {
      if (item.id === id) {
        item.quantity -= 1;
        if (item.quantity === 0) {
          this.removeItem(item.id);
        }
      }
    });
  }

  removeItem(id: number): void {
    this.cart = this.cart.filter(item => item.id !== id);
  }
}
