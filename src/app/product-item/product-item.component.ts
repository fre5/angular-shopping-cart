import { Component, OnInit, Input } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;

  constructor() {
    this.product = {
      id: 0,
      image: '',
      name: '',
      price: '',
    }
  }

  ngOnInit(): void {
  }

  addToCart(id: number): void{
    console.log(`Item with id: ${id} is added to the cart`);
    alert('Item is added to cart');
  }

  setQuantity(id: number, event: any): void {
    console.log(`Item with id: ${id} is set with quantity ${event.target.value}`);
  }

}
