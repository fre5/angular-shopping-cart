import { Component, OnInit } from '@angular/core';
import { Cart } from '../models/Cart';  

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Cart[] = [];

  constructor() { }

  ngOnInit(): void {
    this.cart = [
      {
        id: 1,
        image: '',
        name: 'Desktop',
        price: '$ 100',
        productId: 2,
        quantity: 2
      },
      {
        id: 2,
        image: '',
        name: 'Smart Watch',
        price: '$ 20',
        productId: 5,
        quantity: 2
      },
      {
        id: 3,
        image: '',
        name: 'Tablet',
        price: '$ 90',
        productId: 3,
        quantity: 1
      },
      {
        id: 4,
        image: '',
        name: 'Laptop',
        price: '$ 120',
        productId: 1,
        quantity: 1
      },
      {
        id: 5,
        image: '',
        name: 'Phone',
        price: '$ 200',
        productId: 4,
        quantity: 1
      }
    ]
  }

}
