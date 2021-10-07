import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit {
  @Input() product: Product;

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
    const quantity: string = (event.target as HTMLInputElement).value as string;
    console.log(`Set item with id: ${id} with quantity ${quantity}`)
  }

}
