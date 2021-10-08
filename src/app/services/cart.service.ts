import { Injectable } from '@angular/core';
import { Cart } from '../models/Cart';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  cart: Cart[];
  currentId: number;
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;

  CONST_TAX: number;

  constructor() { 
    this.cart = [];
    this.currentId = 0;
    this.subtotal = 0;
    this.tax = 0;
    this.shipping = 0;
    this.total = 0;
    this.CONST_TAX = 0.08; //to be changed according to zipcode
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

  getSubtotal() {
    return this.cart.reduce((acc, ele) => acc + (parseInt(ele.price, 10) * ele.quantity), 0) ;
  }

  getTax() {
    return this.getSubtotal() * this.CONST_TAX;
  }

  getShipping() {
    return this.cart.reduce((acc, ele) => acc + ele.quantity * 7, 10);
  }

  getTotal() {
    return this.getSubtotal() + this.getTax() + this.getShipping();
  }
}
