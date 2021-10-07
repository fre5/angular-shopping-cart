import { Component, OnInit } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  product: Product;

  constructor() { 
    this.product = {
      id: 0,
      image: '',
      name: 'Laptop',
      price: '$ 999',
    }
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void {
    console.log(`Item with id: ${id} added to card`);
  }

  setQuantity(id: number, event: Event): void {
    console.log(`Set item with id: ${id} with quantity ${event.target}`)
  }

}
