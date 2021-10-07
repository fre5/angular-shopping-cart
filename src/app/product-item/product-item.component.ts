import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Product } from '../models/Product';

@Component({
  selector: 'app-product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent implements OnInit {
  @Input() product: Product;
  @Output() productPage: EventEmitter<number> = new EventEmitter;

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
    alert('Item is added to your cart');
  }

  setQuantity(id: number, event: Event): void {
    const quantity: string = (event.target as HTMLInputElement).value as string;
    console.log(`Item with id: ${id} is set with quantity ${quantity}`);
  }

  goToPage(id: number): void {
    this.productPage.emit(id);
  }

}
